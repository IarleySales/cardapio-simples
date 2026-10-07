const botao = document.getElementById("tema");
const formulario = document.getElementById("Cardapio");
const pedidos = document.getElementById("pedidos");
const verPedidos = document.getElementById("verPedidos");

botao.addEventListener("click", function() {

    document.body.classList.toggle("escuro");

    if (document.body.classList.contains("escuro")) {
        botao.textContent = "☀️";
    } else {
        botao.textContent = "🌙";
    }

});

formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    const prato = document.getElementById("prato").value;
    const cliente = document.getElementById("cliente").value;
    const endereco = document.getElementById("endereco").value;
    const telefone = document.getElementById("telefone").value;
    const pagamento = document.getElementById("pagamento").value;

    const pratos = [
        "Pizza",
        "Hambúrguer",
        "Sushi",
        "Pastel"
    ];

    if (!pratos.includes(prato)) {

        alert("Esse prato não está no cardápio!");

        return;
    }

    const novoPedido = document.createElement("div");

    novoPedido.classList.add("pedido");

    novoPedido.innerHTML = `

        <h2>Pedido</h2>

        <p><strong>Prato:</strong> ${prato}</p>

        <p><strong>Cliente:</strong> ${cliente}</p>

        <p><strong>Endereço:</strong> ${endereco}</p>

        <p><strong>Telefone:</strong> ${telefone}</p>

        <p><strong>Pagamento:</strong> ${pagamento}</p>

    `;

    pedidos.appendChild(novoPedido);

    formulario.reset();

    alert("Pedido cadastrado!");

});

verPedidos.addEventListener("click", function() {

    if (pedidos.style.display === "none") {

        pedidos.style.display = "block";

        verPedidos.textContent = "Ocultar pedidos";

    } else {

        pedidos.style.display = "none";

        verPedidos.textContent = "Verificar pedidos";

    }

});