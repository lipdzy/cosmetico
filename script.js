      // Produtos de exemplo
const products = [
    { name: "Base Líquida Matte", price: "R$ 69,90", image: "https://i.postimg.cc/QdZNfwTK/carmedhellokitty.jpg", available: true },
    { name: "Paleta de Sombras 12 Cores", price: "R$ 89,90", image: "https://i.postimg.cc/wML6cQ0d/perfume-hello-Kitty.jpg", available: true },
    { name: "Batom Matte Vermelho", price: "R$ 45,00", image: "https://i.postimg.cc/kXrV0pKC/shampoo.jpg", available: false },
    { name: "Máscara de Cílios Volume", price: "R$ 58,50", image: "https://i.postimg.cc/Wp9Ps0Ns/unha-jpg.jpg", available: true },
    { name: "Pó Compacto Translúcido", price: "R$ 62,00", image: "/api/placeholder/400/300", available: true },
    { name: "Sérum Facial Hidratante", price: "R$ 79,90", image: "/api/placeholder/400/300", available: false },
    { name: "Protetor Solar FPS 50", price: "R$ 72,00", image: "/api/placeholder/400/300", available: true },
    { name: "Demaquilante Bifásico", price: "R$ 48,00", image: "/api/placeholder/400/300", available: true },
    { name: "Kit Pincéis Maquiagem", price: "R$ 115,90", image: "/api/placeholder/400/300", available: true },
    { name: "Blush Rosado", price: "R$ 42,50", image: "/api/placeholder/400/300", available: false },
    { name: "Iluminador Facial", price: "R$ 54,90", image: "/api/placeholder/400/300", available: true },
    { name: "Contorno Facial em Pó", price: "R$ 65,90", image: "/api/placeholder/400/300", available: true },
    { name: "Esmalte Gel Rosê", price: "R$ 24,90", image: "/api/placeholder/400/300", available: true },
    { name: "Hidratante Corporal", price: "R$ 49,90", image: "/api/placeholder/400/300", available: true },
    { name: "Óleo de Argan para Cabelos", price: "R$ 55,00", image: "/api/placeholder/400/300", available: false },
    { name: "Shampoo Anti-Queda", price: "R$ 39,90", image: "/api/placeholder/400/300", available: true },
    { name: "Condicionador Hidratante", price: "R$ 37,00", image: "/api/placeholder/400/300", available: true },
    { name: "Máscara Capilar Reparadora", price: "R$ 52,50", image: "/api/placeholder/400/300", available: true },
    { name: "Perfume Feminino 50ml", price: "R$ 119,90", image: "/api/placeholder/400/300", available: true },
    { name: "Perfume Masculino 100ml", price: "R$ 139,90", image: "/api/placeholder/400/300", available: false },
    { name: "Creme Anti-idade", price: "R$ 89,90", image: "/api/placeholder/400/300", available: true },
    { name: "Sabonete Facial Esfoliante", price: "R$ 45,00", image: "/api/placeholder/400/300", available: true },
    { name: "Água Termal 150ml", price: "R$ 37,90", image: "/api/placeholder/400/300", available: true },
    { name: "Kit Manicure Profissional", price: "R$ 82,00", image: "/api/placeholder/400/300", available: false },
    { name: "Lápis para Olhos Preto", price: "R$ 32,90", image: "/api/placeholder/400/300", available: true },
    { name: "Delineador Líquido", price: "R$ 45,00", image: "/api/placeholder/400/300", available: true },
    { name: "Fixador de Maquiagem", price: "R$ 58,00", image: "/api/placeholder/400/300", available: true },
    { name: "Primer Facial", price: "R$ 61,90", image: "/api/placeholder/400/300", available: true },
    { name: "Máscara Facial de Argila", price: "R$ 49,00", image: "/api/placeholder/400/300", available: false },
    { name: "Lenços Demaquilantes", price: "R$ 28,90", image: "/api/placeholder/400/300", available: true },
    { name: "Gloss Labial Hidratante", price: "R$ 35,90", image: "/api/placeholder/400/300", available: true },
    { name: "Creme para Mãos e Unhas", price: "R$ 29,90", image: "/api/placeholder/400/300", available: false },
    { name: "Máscara Facial de Ouro", price: "R$ 75,00", image: "/api/placeholder/400/300", available: true },
    { name: "Spray Fixador de Cabelo", price: "R$ 42,50", image: "/api/placeholder/400/300", available: true },
    { name: "Kit Skincare Facial", price: "R$ 159,90", image: "/api/placeholder/400/300", available: false }
];

// Elementos DOM
const catalogContainer = document.getElementById('catalog');
const cartItemsContainer = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');
const cartCounter = document.getElementById('cart-counter');
const modal = document.getElementById('image-modal');
const modalImg = document.getElementById('modal-img');
const closeModal = document.getElementById('close-modal');
const searchInput = document.getElementById('search-input');
const cartIcon = document.getElementById('cart-icon');
const cartSidebar = document.getElementById('cart-sidebar');
const closeCart = document.getElementById('close-cart');
const clearCartBtn = document.getElementById('clear-cart');
const checkoutBtn = document.getElementById('checkout');

// Estado da aplicação
let cartItems = [];
const favorites = new Set();

// Carregar produtos na página
function loadProducts() {
    catalogContainer.innerHTML = '';
    products.forEach((product, index) => {
        const productCard = document.createElement('div');
        productCard.classList.add('product');
        
        // Adicionar classe para produtos indisponíveis
        if (!product.available) {
            productCard.classList.add('unavailable');
        }
        
        productCard.innerHTML = `
            <div class="product-image-container" data-index="${index}">
                <img src="${product.image}" alt="${product.name}">
                ${!product.available ? '<div class="unavailable-overlay"><span>Indisponível</span></div>' : ''}
            </div>
            <div class="product-details">
                <div class="product-info">
                    <div class="product-title-price">
                        <h3 class="product-title">${product.name}</h3>
                        <p class="product-price">${product.price}</p>
                        <p class="product-availability">${product.available ? '<span class="available">Disponível</span>' : '<span class="unavailable">Indisponível</span>'}</p>
                    </div>
                    <div class="product-actions">
                        <button class="favorite-btn" data-index="${index}">
                            <i class="far fa-heart"></i>
                        </button>
                        <button class="cart-btn" data-index="${index}" ${!product.available ? 'disabled' : ''}>
                            <i class="fas fa-shopping-cart"></i>
                        </button>
                    </div>
                </div>
            </div>
        `;
        
        catalogContainer.appendChild(productCard);
    });
    
    // Adicionar eventos após criar os elementos
    addEventListeners();
}

// Adicionar eventos aos elementos
function addEventListeners() {
    // Evento para abrir modal ao clicar na imagem
    const productImages = document.querySelectorAll('.product-image-container');
    productImages.forEach(img => {
        img.addEventListener('click', function() {
            const index = this.getAttribute('data-index');
            modalImg.src = products[index].image;
            modal.style.display = 'flex';
        });
    });
    
    // Fechar modal
    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
    });
    
    // Fechar modal ao clicar fora da imagem
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
    
    // Favoritar produto
    const favoriteBtns = document.querySelectorAll('.favorite-btn');
    favoriteBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const index = this.getAttribute('data-index');
            const heartIcon = this.querySelector('i');
            
            if (favorites.has(index)) {
                favorites.delete(index);
                heartIcon.classList.remove('fas', 'favorite-active');
                heartIcon.classList.add('far');
            } else {
                favorites.add(index);
                heartIcon.classList.remove('far');
                heartIcon.classList.add('fas', 'favorite-active');
            }
        });
    });
    
    // Adicionar ao carrinho
    const cartBtns = document.querySelectorAll('.cart-btn:not([disabled])');
    cartBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const index = parseInt(this.getAttribute('data-index'));
            addToCart(index);
            
            // Animação de confirmação
            this.querySelector('i').style.color = '#e66fac';
            setTimeout(() => {
                this.querySelector('i').style.color = '';
            }, 300);
        });
    });
    
    // Abrir carrinho
    cartIcon.addEventListener('click', function() {
        cartSidebar.classList.add('open');
    });
    
    // Fechar carrinho
    closeCart.addEventListener('click', function() {
        cartSidebar.classList.remove('open');
    });
    
    // Limpar carrinho
    clearCartBtn.addEventListener('click', function() {
        cartItems = [];
        updateCartDisplay();
        updateCartCounter();
    });
    
    // Finalizar compra
    checkoutBtn.addEventListener('click', function() {
        if (cartItems.length === 0) {
            alert('Seu carrinho está vazio!');
            return;
        }
        
        alert('Compra finalizada com sucesso! Obrigado por comprar conosco.');
        cartItems = [];
        updateCartDisplay();
        updateCartCounter();
        cartSidebar.classList.remove('open');
    });
    
    // Pesquisar produtos
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        const productElements = document.querySelectorAll('.product');
        
        productElements.forEach((productElem, index) => {
            const productName = products[index].name.toLowerCase();
            if (productName.includes(searchTerm)) {
                productElem.style.display = 'block';
            } else {
                productElem.style.display = 'none';
            }
        });
    });
}

// Adicionar produto ao carrinho
function addToCart(productIndex) {
    const product = products[productIndex];
    
    // Verificar se o produto está disponível
    if (!product.available) {
        alert('Este produto está indisponível no momento.');
        return;
    }
    
    // Verificar se o produto já está no carrinho
    const existingItemIndex = cartItems.findIndex(item => item.index === productIndex);
    
    if (existingItemIndex !== -1) {
        // Incrementar quantidade se já estiver no carrinho
        cartItems[existingItemIndex].quantity++;
    } else {
        // Adicionar novo item ao carrinho
        cartItems.push({
            index: productIndex,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: 1
        });
    }
    
    updateCartDisplay();
    updateCartCounter();
}

// Atualizar exibição do carrinho
function updateCartDisplay() {
    cartItemsContainer.innerHTML = '';
    
    if (cartItems.length === 0) {
        cartItemsContainer.innerHTML = '<p class="empty-cart">Seu carrinho está vazio</p>';
        cartTotal.textContent = 'R$ 0,00';
        return;
    }
    
    let total = 0;
    
    cartItems.forEach((item, index) => {
        const cartItemElement = document.createElement('div');
        cartItemElement.classList.add('cart-item');
        
        // Extrair valor numérico do preço
        const priceValue = parseFloat(item.price.replace('R$ ', '').replace(',', '.'));
        const itemTotal = priceValue * item.quantity;
        total += itemTotal;
        
        cartItemElement.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="cart-item-image">
            <div class="cart-item-details">
                <h4>${item.name}</h4>
                <p>${item.price} x ${item.quantity}</p>
                <div class="cart-item-actions">
                    <button class="decrease-quantity" data-index="${index}">-</button>
                    <span class="item-quantity">${item.quantity}</span>
                    <button class="increase-quantity" data-index="${index}">+</button>
                    <button class="remove-item" data-index="${index}">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
        `;
        
        cartItemsContainer.appendChild(cartItemElement);
    });
    
    // Formatar o total
    cartTotal.textContent = `R$ ${total.toFixed(2).replace('.', ',')}`;
    
    // Adicionar eventos aos botões do carrinho
    addCartItemEvents();
}

// Adicionar eventos aos itens do carrinho
function addCartItemEvents() {
    // Aumentar quantidade
    const increaseBtns = document.querySelectorAll('.increase-quantity');
    increaseBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const index = parseInt(this.getAttribute('data-index'));
            cartItems[index].quantity++;
            updateCartDisplay();
            updateCartCounter();
        });
    });
    
        // Diminuir quantidade
        const decreaseBtns = document.querySelectorAll('.decrease-quantity');
        decreaseBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                const index = parseInt(this.getAttribute('data-index'));
                if (cartItems[index].quantity > 1) {
                    cartItems[index].quantity--;
                } else {
                    cartItems.splice(index, 1);
                }
                updateCartDisplay();
                updateCartCounter();
            });
        });
        
        // Remover item
        const removeBtns = document.querySelectorAll('.remove-item');
        removeBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                const index = parseInt(this.getAttribute('data-index'));
                cartItems.splice(index, 1);
                updateCartDisplay();
                updateCartCounter();
            });
        });
    }
    
    // Atualizar contador do carrinho
    function updateCartCounter() {
        const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
        cartCounter.textContent = totalItems;
        
        if (totalItems > 0) {
            cartCounter.style.display = 'flex';
        } else {
            cartCounter.style.display = 'none';
        }
    }
    
    // Inicializar a aplicação
    function init() {
        loadProducts();
        updateCartDisplay();
        updateCartCounter();
    }
    
    // Iniciar quando o DOM estiver carregado
    document.addEventListener('DOMContentLoaded', init);
    
        
        // Adicionar eventos
        function addEventListeners() {
            // Evento para abrir modal ao clicar na imagem
            const productImages = document.querySelectorAll('.product-image-container');
            productImages.forEach(img => {
                img.addEventListener('click', function() {
                    const index = this.getAttribute('data-index');
                    modalImg.src = products[index].image;
                    modal.style.display = 'flex';
                });
            });
            
            // Fechar modal
            closeModal.addEventListener('click', function() {
                modal.style.display = 'none';
            });
            
            // Fechar modal ao clicar fora da imagem
            modal.addEventListener('click', function(e) {
                if (e.target === modal) {
                    modal.style.display = 'none';
                }
            });
            
            // Favoritar produto
            const favoriteBtns = document.querySelectorAll('.favorite-btn');
            favoriteBtns.forEach(btn => {
                btn.addEventListener('click', function() {
                    const index = this.getAttribute('data-index');
                    const heartIcon = this.querySelector('i');
                    
                    if (favorites.has(index)) {
                        favorites.delete(index);
                        heartIcon.classList.remove('fas', 'favorite-active');
                        heartIcon.classList.add('far');
                    } else {
                        favorites.add(index);
                        heartIcon.classList.remove('far');
                        heartIcon.classList.add('fas', 'favorite-active');
                    }
                });
            });
            
            // Adicionar ao carrinho
            const cartBtns = document.querySelectorAll('.cart-btn');
            cartBtns.forEach(btn => {
                btn.addEventListener('click', function() {
                    const index = parseInt(this.getAttribute('data-index'));
                    addToCart(index);
                    
                    // Verificar se já existe um contador no produto
                    let counterElem = this.closest('.product').querySelector('.cart-counter');
                    
                    if (!counterElem) {
                        // Criar contador se não existir
                        counterElem = document.createElement('div');
                        counterElem.classList.add('cart-counter');
                        this.closest('.product').style.position = 'relative';
                        this.closest('.product').appendChild(counterElem);
                        counterElem.textContent = '1';
                    } else {
                        // Incrementar o contador do produto específico
                        const currentCount = parseInt(counterElem.textContent || '0');
                        counterElem.textContent = currentCount + 1;
                    }
                    
                    // Animação de confirmação
                    this.querySelector('i').style.color = '#e66fac';
                    setTimeout(() => {
                        this.querySelector('i').style.color = '';
                    }, 300);
                });
            });
            
            // Compartilhar site
            document.getElementById('shareButton').addEventListener('click', function(e) {
                e.preventDefault();
                
                // Compartilhar via WhatsApp
                const text = 'Confira os produtos incríveis da Glamour Cosméticos!';
                const url = window.location.href;
                const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(text + ' ' + url)}`;
                window.open(whatsappUrl, '_blank');
            });
            
            // Fechar carrinho
            closeCart.addEventListener('click', function() {
                cartOverlay.style.display = 'none';
            });
            
            // Fechar carrinho ao clicar fora
            cartOverlay.addEventListener('click', function(e) {
                if (e.target === cartOverlay) {
                    cartOverlay.style.display = 'none';
                }
            });
            
            // Limpar carrinho
            clearCartButton.addEventListener('click', function() {
                cartItems = [];
                updateCartDisplay();
                updateCartCounter();
                
                // Limpar contadores nos produtos
                document.querySelectorAll('.cart-counter').forEach(counter => {
                    counter.remove();
                });
            });
            
            // Compartilhar carrinho no WhatsApp
            shareCartButton.addEventListener('click', function() {
                shareCartOnWhatsApp();
            });
            
            // Botão do carrinho no canto superior direito
            cartButton.addEventListener('click', function() {
                openCart();
            });
        }
        
        // Função para adicionar produto ao carrinho
        function addToCart(productIndex) {
            const product = products[productIndex];
            
            // Verificar se o produto já está no carrinho
            const existingItemIndex = cartItems.findIndex(item => item.index === productIndex);
            
            if (existingItemIndex !== -1) {
                // Incrementar quantidade se já estiver no carrinho
                cartItems[existingItemIndex].quantity++;
            } else {
                // Adicionar novo item ao carrinho
                cartItems.push({
                    index: productIndex,
                    name: product.name,
                    price: product.price,
                    image: product.image,
                    quantity: 1
                });
            }
            
            updateCartDisplay();
            updateCartCounter();
        }
        
        // Função para remover produto do carrinho
        function removeFromCart(index) {
            cartItems.splice(index, 1);
            updateCartDisplay();
            updateCartCounter();
            
            // Atualizar contadores nos produtos
            updateProductCounters();
        }
        
        // Função para atualizar contadores nos produtos
        function updateProductCounters() {
            // Primeiro, remover todos os contadores
            document.querySelectorAll('.cart-counter').forEach(counter => {
                counter.remove();
            });
            
            // Depois, adicionar contadores atualizados
            cartItems.forEach(item => {
                const productElement = document.querySelector(`.product-image-container[data-index="${item.index}"]`).closest('.product');
                let counterElem = productElement.querySelector('.cart-counter');
                
                if (!counterElem) {
                    counterElem = document.createElement('div');
                    counterElem.classList.add('cart-counter');
                    productElement.style.position = 'relative';
                    productElement.appendChild(counterElem);
                }
                
                counterElem.textContent = item.quantity;
            });
        }
        
        // Função para atualizar quantidade de um item no carrinho
        function updateItemQuantity(index, change) {
            cartItems[index].quantity += change;
            
            if (cartItems[index].quantity <= 0) {
                removeFromCart(index);
            } else {
                updateCartDisplay();
                updateCartCounter();
                updateProductCounters();
            }
        }
        
        // Função para atualizar a exibição do carrinho
        function updateCartDisplay() {
            if (cartItems.length === 0) {
                cartItemsContainer.innerHTML = '<p class="empty-cart-message">Seu carrinho está vazio</p>';
                cartTotalElement.textContent = 'Total: R$ 0,00';
                return;
            }
            
            let cartHTML = '';
            let total = 0;
            
            cartItems.forEach((item, index) => {
                // Extrair o valor numérico do preço (removendo "R$ " e substituindo vírgula por ponto)
                const priceValue = parseFloat(item.price.replace('R$ ', '').replace(',', '.'));
                const itemTotal = priceValue * item.quantity;
                total += itemTotal;
                
                cartHTML += `
                    <div class="cart-item">
                        <div class="cart-item-image">
                            <img src="${item.image}" alt="${item.name}">
                        </div>
                        <div class="cart-item-details">
                            <h3 class="cart-item-title">${item.name}</h3>
                            <p class="cart-item-price">${item.price} x ${item.quantity}</p>
                            <div class="cart-item-quantity">
                                <button class="quantity-btn" onclick="updateItemQuantity(${index}, -1)">-</button>
                                <span class="item-quantity">${item.quantity}</span>
                                <button class="quantity-btn" onclick="updateItemQuantity(${index}, 1)">+</button>
                                <span class="cart-item-remove" onclick="removeFromCart(${index})">
                                    <i class="fas fa-trash-alt"></i>
                                </span>
                            </div>
                        </div>
                    </div>
                `;
            });
            
            cartItemsContainer.innerHTML = cartHTML;
            cartTotalElement.textContent = `Total: R$ ${total.toFixed(2).replace('.', ',')}`;
        }
        
        // Função para atualizar o contador do botão do carrinho
        function updateCartCounter() {
            let totalItems = 0;
            
            cartItems.forEach(item => {
                totalItems += item.quantity;
            });
            
            cartButtonCounter.textContent = totalItems;
            
            // Mostrar ou esconder o contador baseado na quantidade
            if (totalItems > 0) {
                cartButtonCounter.style.display = 'flex';
            } else {
                cartButtonCounter.style.display = 'none';
            }
        }
        
        // Função para abrir o carrinho
        function openCart() {
            cartOverlay.style.display = 'flex';
            updateCartDisplay();
        }
        
        // Função para compartilhar o carrinho no WhatsApp
        function shareCartOnWhatsApp() {
            if (cartItems.length === 0) {
                alert('Adicione produtos ao carrinho antes de compartilhar!');
                return;
            }
            
            let message = '*Meu Pedido na Glamour Cosméticos*\n\n';
            let total = 0;
            
            cartItems.forEach(item => {
                const priceValue = parseFloat(item.price.replace('R$ ', '').replace(',', '.'));
                const itemTotal = priceValue * item.quantity;
                total += itemTotal;
                
                message += `• ${item.quantity}x ${item.name} - ${item.price} cada\n`;
            });
            
            message += `\n*Total: R$ ${total.toFixed(2).replace('.', ',')}*\n\n`;
            message += 'Gostaria de confirmar este pedido!';
            
            const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`;
            window.open(whatsappUrl, '_blank');
        }
        
        // Inicializar o catálogo
        window.onload = function() {
            loadProducts();
            updateCartCounter(); // Inicializar o contador do carrinho
        };
        // Função para pesquisar produtos
function setupSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');
    const catalogContainer = document.getElementById('catalog');
    
    // Criar elemento para mensagem de "nenhum resultado"
    const noResultsMessage = document.createElement('div');
    noResultsMessage.className = 'no-results';
    noResultsMessage.textContent = 'Nenhum produto encontrado para sua pesquisa.';
    noResultsMessage.style.display = 'none';
    
    // Adicionar a mensagem após o catálogo
    catalogContainer.parentNode.insertBefore(noResultsMessage, catalogContainer.nextSibling);
    
    // Função para realizar a pesquisa
    function performSearch() {
        const searchTerm = searchInput.value.toLowerCase().trim();
        const productCards = document.querySelectorAll('.product');
        let resultsFound = false;
        
        // Se o campo de pesquisa estiver vazio, mostrar todos os produtos
        if (!searchTerm) {
            productCards.forEach(card => {
                card.classList.remove('hidden');
                
                // Remover qualquer highlight anterior
                const title = card.querySelector('.product-title');
                title.innerHTML = title.textContent;
            });
            
            noResultsMessage.style.display = 'none';
            return;
        }
        
        // Verificar cada produto
        productCards.forEach(card => {
            const title = card.querySelector('.product-title');
            const productName = title.textContent.toLowerCase();
            
            if (productName.includes(searchTerm)) {
                resultsFound = true;
                card.classList.remove('hidden');
                
                // Destacar o termo pesquisado no título
                const regex = new RegExp(`(${searchTerm})`, 'gi');
                title.innerHTML = title.textContent.replace(regex, '<span class="search-highlight">$1</span>');
            } else {
                card.classList.add('hidden');
                
                // Remover qualquer highlight anterior
                title.innerHTML = title.textContent;
            }
        });
        
        // Mostrar mensagem se não houver resultados
        if (!resultsFound) {
            noResultsMessage.style.display = 'block';
        } else {
            noResultsMessage.style.display = 'none';
        }
    }
    
    // Evento de clique no botão de pesquisa
    searchButton.addEventListener('click', performSearch);
    
    // Pesquisa em tempo real enquanto o usuário digita
    searchInput.addEventListener('keyup', function(e) {
        // Pesquisar imediatamente ou se pressionar Enter
        if (e.key === 'Enter' || this.value.length >= 2 || this.value.length === 0) {
            performSearch();
        }
    });
    
    // Pesquisar quando o campo de pesquisa perder o foco
    searchInput.addEventListener('blur', performSearch);
}


// Modificar a função window.onload para incluir a inicialização da pesquisa
window.onload = function() {
    loadProducts();
    updateCartCounter();
    setupSearch(); // Inicializar a funcionalidade de pesquisa
};
