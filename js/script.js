
    // filtro para duplicatas em array
    Array.prototype.unique = function() {
        return this.filter(function (value, index, self) { 
            return self.indexOf(value) === index;
        });
    }

    // Função que limpa listas auxiliares
    function limpaListasAuxiliares(){
        for (var i = 0; i < allHeaders.length; ++i) {
            var varname = allHeaders[i].getAttribute("name");
            window["filtro_"+varname] = [];
        }
    }

    // Atualiza os dados da tabela
    function atualizaTabela(auxiliar){
        var contemDados = true;
        for(var i = 0; i < allHeaders.length; i++){
            var varname = allHeaders[i].getAttribute("name");
            if(auxiliar.length == 0){
                auxiliar = window["filtro_"+varname];
            }
            if(auxiliar.length != 0 && window["filtro_"+varname].length != 0){
                auxiliar = auxiliar.filter(element => window["filtro_"+varname].includes(element));
                auxiliar.unique();
            }
        }
        for(var i = 0; i < allHeaders.length; i++){
            var varname = allHeaders[i].getAttribute("name");
            if(window["filtro_"+varname].length != 0){
                contemDados = false;
                break;
            }
        }
        if(contemDados == true){
            if(auxiliar.length == 0){
                data = dataBackup;
                populaTabela();
            //  limpaListasAuxiliares();
            }
        }
        else{
            data = auxiliar;
            populaTabela();
        //  limpaListasAuxiliares();
        }
    }

    // formata string removendo espaços em branco
    

    // Função que limpa todos os Filtros
    function limpaFiltros(){
        data = dataBackup;
        const allCheckbox = $('.ui.custom.popup .ui.checkbox');
        for(i = 0; i < allCheckbox.length; i++){
            var selecionado = allCheckbox[i].firstChild.checked;
            if(selecionado == true){
                allCheckbox[i].firstChild.checked = 0;
            }
        };
        for (var i = 0; i < allSortIcons.length; ++i) {
            if(allSortIcons[i].classList.contains("down")){
                allSortIcons[i].classList.remove("down");
                allSortIcons[i].classList.add("up");
            }
        }
        document.querySelectorAll("#tabela_criada input").forEach(input =>{
            input.value = "";
        });
        ocultaColunas();
        limpaListasAuxiliares();
        populaTabela();
    }

    // Função que popula a tabela
    function populaTabela(){
        var tableBody = document.querySelector("tbody");
        while(tableBody.hasChildNodes())
            {
                tableBody.removeChild(tableBody.firstChild);
            }
        data.forEach(v => {
        const plate = v.placa;
        const events = v.eventos;
        const signal = v.sinalgsm;
        const device = v.dispositivo;
        const validSignal = v.sinalValido;
        const dt_comunication = v.dtComunicacao
        var type = "";
        var color = "";
       
        switch(v.status[0]){
            case '1':
                type = "A Ativar"
                color = "blue-color"
                break;
            case '2':
                type = "Ativo"
                color = "green-color"
                break;
            case '3':
                type = "A vencer"
                color = "yellow-color"
                break;
            case '4':
                type = "Cancelado"
                color = "red-color"
                break;
            case '5':
                type = "Atrasado"
                color = "orange-color"
                break;    
        };
        
            $('#tabela_criada tbody').append(
            '<tr><td class="display-flex max-w w-250" name="status" draggable="true" scope="col"><div style="flex-direction: column;margin: auto;">'
            +'<i class="circle '+ color +' icon"></i><span class="bold-font">' + type + '</span>' + '</div></td>'
            + '<td class="centered-text max-w w-250" name="placa" draggable="true" scope="col">' + plate + '</td>'
            + '<td class="max-w w-250" draggable="true" name="eventos" scope="col">' + events + '</td>'
            + '<td class="max-w w-250" draggable="true" name="sinalgsm" scope="col">' + signal + '</td>'
            + '<td class="centered-text max-w w-250" name="dispositivo" draggable="true" scope="col">' + device + '</td>'
            + '<td class="centered-text max-w w-250" name="sinalValido" draggable="true" scope="col">' + validSignal + '</td>'
            + '<td class="centered-text max-w w-250" name="dtComunicacao" draggable="true" scope="col">' + dt_comunication + '</td></tr>'
            );
        });
    }

    // Função para ordenar tabela
    function sortTable(n) {
        var icon = $('.sort.alphabet.icon')[n];
        var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
        table = document.getElementById("tabela_criada");
        switching = true;
        dir = "asc"; 
        while (switching) {
          switching = false;
          rows = table.rows;
          for (i = 1; i < (rows.length - 1); i++) {
            shouldSwitch = false;
            x = rows[i].getElementsByTagName("TD")[n];
            y = rows[i + 1].getElementsByTagName("TD")[n];
            if (dir == "asc") {
              if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                shouldSwitch= true;
                break;
              }
            } else if (dir == "desc") {
              if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                shouldSwitch = true;
                break;
              }
            }
          }
          if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
            switchcount ++;      
          } else {
            if (switchcount == 0 && dir == "asc") {
              dir = "desc";
              switching = true;
            }
          }
        }
      }

      // Função para filtrar a tabela pelos checkBox
    function filtroCheckbox(){
        
        var auxiliar = [];
        for (var i = 0; i < allCheckboxFilter.length; ++i) {
                var coluna = allCheckboxFilter[i].parentNode.parentNode.getAttribute("name");
                if(window["filtro_"+coluna].length != 0){
                    window["filtro_"+coluna] = [];
                }
        }
        for (var i = 0; i < allCheckboxFilter.length; ++i) {
            if(allCheckboxFilter[i].firstChild.checked == true){
                var coluna = allCheckboxFilter[i].parentNode.parentNode.getAttribute("name");
                var dataVal = allCheckboxFilter[i].firstChild.name;

                var filtrados = dataBackup.filter((dado)=>{      
                return dado[coluna] == dataVal;
                });

                filtrados.forEach(i =>{
                    window["filtro_"+coluna].push(i)
                })
                window["filtro_"+coluna] =  window["filtro_"+coluna].unique();
            }
        }
        atualizaTabela(auxiliar);
    }

    // Funcao para mudar icone de ordenação ao clicar
    function changeIcon(indice){
        var icone = $('.sort.alphabet.icon')[indice];
            if(icone.classList.contains("down")){
                icone.classList.remove("down");
                icone.classList.add("up");
            }
            else{
                icone.classList.remove("up");
                icone.classList.add("down");
            }
        }

    // Função para filtrar por valor digitado que nao seja data
    $(function(){
        $("#tabela_criada input.letter").keyup(function(){   
            var auxiliar = [];  
            var index = $(this).parent().parent().index();
            var coluna = this.parentElement.parentElement.getAttribute("name");
            window["filtro_"+coluna] = [];
            
            var nth = "#tabela_criada td:nth-child("+(index+1).toString()+")";
            var valor = $(this).val().toUpperCase();
            
                var accepted = true;
                var filtrados = dataBackup.filter((dado)=>{    
                    
                    
                    for(var i = 0; i < valor.length; i++){
                        
                        
                            if(dado[coluna].toUpperCase().indexOf(valor.split("")[i]) >= 0){
                                accepted = true;
                            }else{
                                accepted = false;
                                break;
                            }  
                        }
                        if(accepted == true){
                            return dado[coluna];
                        }
                    });
                    
                    if(valor.length == 0){
                        accepted = false;
                    }
    
                if(filtrados.length != 0){
                    filtrados.forEach(i =>{
                        window["filtro_"+coluna].push(i)
                    })
                    window["filtro_"+coluna] =  window["filtro_"+coluna].unique();
                }
            for(var i = 0; i < allHeaders.length; i++){
                
                var varname = allHeaders[i].getAttribute("name");
                
                
                if(auxiliar.length != 0 && window["filtro_"+varname].length != 0){
                    auxiliar = auxiliar.filter(element => window["filtro_"+varname].includes(element));
                    auxiliar.unique();
                }
                if(auxiliar.length == 0){
                    auxiliar = window["filtro_"+varname];
                } 
            }
    
            if(auxiliar.length == 0){
                data = dataBackup;
                populaTabela();
            }
            else{
                data = auxiliar;
                populaTabela();
            }
        });
    });

    // Filtro para input que contem datas
    $(function(){
        $("#tabela_criada input.date").keyup(function(e){   
            if(e.which == 13){
            
            var auxiliar = [];  
            var index = $(this).parent().parent().index();
            var coluna = this.parentElement.parentElement.getAttribute("name");
            window["filtro_"+coluna] = [];
            
            var nth = "#tabela_criada td:nth-child("+(index+1).toString()+")";
            var valor = $(this).val().split(" ");
            var cond1 = valor[0];
            var data1 =  valor[1];
            console.log("25/02/2020".toDate("dd/MM/yyyy", "/"))
            var cond2 = valor[2];
            var data2 = new Date(valor[3]);
            var filtrados = dataBackup.filter((dado)=>{  
                var dataPrincipal = new Date(dado[coluna])
                debugger
                if(cond1 == '>'){
                    if(dataPrincipal > data1){
                        console.log("Datas maiores que 25/02/2020")
                        console.log(dataPrincipal)
                    }
                }if(cond1 == '<'){
                    if(dataPrincipal < data1){
                        console.log(dataPrincipal + cond1 + data1)
                        console.log(dataPrincipal)
                    }
                }
            });
                // var accepted = true;
                // var filtrados = dataBackup.filter((dado)=>{    
                    
                    
                //     for(var i = 0; i < valor.length; i++){
                        
                        
                //             if(dado[coluna].toUpperCase().indexOf(valor.split("")[i]) >= 0){
                //                 accepted = true;
                //             }else{
                //                 accepted = false;
                //                 break;
                //             }  
                //         }
                //         if(accepted == true){
                //             return dado[coluna];
                //         }
                //     });
                    
                //     if(valor.length == 0){
                //         accepted = false;
                //     }
    
                // if(filtrados.length != 0){
                //     filtrados.forEach(i =>{
                //         window["filtro_"+coluna].push(i)
                //     })
                //     window["filtro_"+coluna] =  window["filtro_"+coluna].unique();
                // }
            for(var i = 0; i < allHeaders.length; i++){
                
                var varname = allHeaders[i].getAttribute("name");
                
                
                if(auxiliar.length != 0 && window["filtro_"+varname].length != 0){
                    auxiliar = auxiliar.filter(element => window["filtro_"+varname].includes(element));
                    auxiliar.unique();
                }
                if(auxiliar.length == 0){
                    auxiliar = window["filtro_"+varname];
                } 
            }
    
            if(auxiliar.length == 0){
                data = dataBackup;
                populaTabela();
            }
            else{
                data = auxiliar;
                populaTabela();
            }
        }
        });
        
    });

    function ocultaColunas(){
        for(var i = 0; i < allCheckboxColumns.length; i++){
            var column = allCheckboxColumns[i].firstChild.getAttribute("name");
            if(allCheckboxColumns[i].firstChild.checked == true){
                document.querySelector("thead #header_"+column).classList.add("d-none");
                document.querySelectorAll("tbody td[name ="+column+"]").forEach(i =>{
                    i.classList.add("d-none");
                })
            }
            else{
                if(document.querySelector("thead #header_"+column).classList.contains("d-none")){
                    document.querySelector("thead #header_"+column).classList.remove("d-none");
                    document.querySelectorAll("tbody td[name ="+column+"]").forEach(i =>{
                        i.classList.remove("d-none");
                    })
                }
            }
        }
    }