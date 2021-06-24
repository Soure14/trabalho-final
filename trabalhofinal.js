const  readline  =  require ( "readline-sync" )

function  bannerEntrada ( ) {
    console . log ( "=====================" )
    console . log ( 'TRABALHO FINAL' )
    console . log ( "=====================" )
    console . log ( 'Escolha uma lista de exercícios \ n 1 ° LISTA \ n 2 ° LISTA \ n 3 ° LISTA \ n 4-Sair \ n' )
}

function  imprimirLista ( quantidade ) {
    for  ( var  x  =  1 ;  x  <=  quantidade ;  x ++ ) {
        console . log ( `[+] - Exercicio $ { x } ` )
    }
    
}

function  formatar ( x ) {
    var  valor   =  [ 0 , 0 , 0 ]
    if  ( x  <=  9 ) {
        valor [ 2 ]  =  x
    }  else  {
        var  unidade  =  ( x % 10 )
        var  dezena  =  ( Math . chão ( x / 10 ) )
        valor [ 1 ]  =  dezena
        valor [ 2 ]  =  unidade
    }
     valor_de_retono . juntar ( '' )
}



function  jsonListas ( nLista ,  quantidadeExerci ) {  // numero da lista e quantidade de exercício dela
    var  listaComExerc  =  [ ]
   
    for  ( var  nExercício  =  0 ;  nExercício  <=  quantidadeExerci ;  nExercício ++ ) {
        listaComExerc . push ( {  'caminho' : `..//v2\\lista $ { nLista } \\ ex $ { formatar ( nExercicio ) } _ifro_lista_ $ { nLista } .js`  } )
    }
    return  listaComExerc
}


function  validarEntradaExercicio ( quantidadeEx ,  valorUsuario ,  listaEx ) {
    if ( valorUsuario  >   quantidadeEx  ||  valorUsuario  <  1 ) {
        console . log ( 'Opção inválida' )
    }  else {
        requer ( listaEx [ valorUsuario ] . caminho )
    }

}

function  verificarEntrada ( ) {
    var  escolhaLista  =  Número . parseInt ( readline . question ( "Escolha uma lista:" ) )
    switch  ( escolhaLista ) {
        case  1 :
            var  quantidadeExs  =  40  // quantidade exs
            var  lista  =  1  // número da lista
            var  y  =  imprimirLista ( quantidadeExs )  // retorna a escolha do usuário
            var  lista1  =  jsonListas ( lista ,  quantidadeExs )  // lista 1, 40 exercícios
            validarEntradaExercicio ( quantidadeExs ,  y ,  lista1 )
            
            pausa
        case  2 :
            var  quantidadeExs  =  25
            var  lista  =  2
            var  y  =  imprimirLista ( 25 )
            var  lista2  =  jsonListas ( lista ,  quantidadeExs )
            validarEntradaExercicio ( quantidadeExs ,  y ,  lista2 )
            pausa

            case  3 :
                var  quantidadeExs  =  26
                var  lista  =  3
                var  y  =  imprimirLista ( 26 )
                var  lista3  =  jsonListas ( lista ,  quantidadeExs )
                validarEntradaExercicio ( quantidadeExs ,  y ,  lista3 )
    
                pausa
    
            case  4 :
                processo . sair ( )
    
                pausa
        }
     
     setTimeout ( ( )  =>  {  principal ( ) ;  } ,  6000 ) ;
     
    }
    
    
    function  principal ( ) {
        console . limpar ( )
        bannerEntrada ( )
        verificarEntrada ( )
    }
    principal ( )