let elementoH1 = document.getElementById("titulo")
elementoH1.innerText = "Desenvolvimento JS- innerText/innerHTML"

elementoTagA = document.querySelector("a")
elementoTagA.innerText = "Conheça o site da Proz Educação"

listaNaoOrdenada = document.querySelector("ul")
listaNaoOrdenada.innerHTML = `
<h2>O objetivo deste desenvolvimento é:</h2>
<ul>
   <li>Compreender a propriedade .innerText</li>
   <li>Compreender a propriedade .innerHTML</li>
   <li>Colocar em prática o conhecimento adquirido nesse módulo</li>
</ul>
`
listaOrdenada = document.querySelector("ol")
listaOrdenada.innerHTML = ` 
<h3> Conheça alguns dos cursos ofertados pela Proz</h3>
<ol>
  <li><a href = "https://inscricao.prozeducacao.com.br/inscricao-administracao/" target="_blank">Administração</a></li>
  <li><a href = "https://inscricao.prozeducacao.com.br/inscricao-desenvolvimento-de-sistemas/" target = "_blank">Desenvolvimento de Sistemas</a></li>
  <li><a href = "https://inscricao.prozeducacao.com.br/inscricao-enfermagem/" target = "_blank">Enfermagem</a></li>
</ol>
`