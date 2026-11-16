const titles={inicio:"Bom dia! ♡",despesas:"Despesas e receitas",cartao:"Cartão de crédito",salario:"Salário e receitas",investimentos:"Investimentos",metas:"Minhas metas",relatorios:"Relatórios"};
const pages=[...document.querySelectorAll(".page")];
function showPage(name){
  pages.forEach(p=>p.classList.toggle("active",p.id===`page-${name}`));
  document.querySelectorAll("[data-page]").forEach(b=>b.classList.toggle("active",b.dataset.page===name));
  document.getElementById("pageTitle").textContent=titles[name]||"Miaubank";
  window.scrollTo({top:0,behavior:"smooth"});
}
document.querySelectorAll("[data-page]").forEach(b=>b.addEventListener("click",()=>showPage(b.dataset.page)));
const toast=document.getElementById("toast");
function notify(message){toast.textContent=message;toast.classList.add("show");setTimeout(()=>toast.classList.remove("show"),2400)}
document.getElementById("privacyBtn").addEventListener("click",()=>{
  document.body.classList.toggle("privacy");
  document.querySelectorAll(".money").forEach(el=>el.dataset.original?el.textContent=el.dataset.original:(el.dataset.original=el.textContent,el.textContent="••••••"));
  notify(document.body.classList.contains("privacy")?"Valores ocultados nesta visualização.":"Valores exibidos.");
});
document.getElementById("newEntry").addEventListener("click",()=>notify("A tela de cadastro será implementada na etapa de funcionalidades financeiras."));
if("serviceWorker" in navigator && location.protocol!=="file:"){window.addEventListener("load",()=>navigator.serviceWorker.register("./service-worker.js").catch(()=>{}));}
