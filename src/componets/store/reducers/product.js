const productsList = [
  {
    id_product: 1,
    category: "Literatura Brasileira",
    fk_idcategorys: 1,
    name_product: "O Vendedor de Sonhos - o Chamado",
    price: 20,
    image: "./images/produtos/O vendedor.jpg",
    id_categorys: 1,
    name_categorys: "Romance",
    selected: false
  },
 
  {
    id_product: 11,
    category: "Literatura Brasileira",
    fk_idcategorys: 1,
    name_product: "A Menina Feita de Espinhos",
    price: 16.90,
    image: "./images/produtos/A menina feita de espinhos.jpg",
    id_categorys: 1,
    name_categorys: "Romance",
    selected: false
  },
  {
    id_product: 7,
    category: "Administração",
    fk_idcategorys: 5,
    name_product: "O Poder da Autorresponsabilidade ",
    price: 14.90,
    image: "./images/produtos/O poder.jpg",
    id_categorys: 7,
    name_categorys: "Administração Geral",
    selected: false
  },
  {
    id_product: 15,
    category: "Administração",
    fk_idcategorys: 5,
    name_product: "Os Segredos da Mente Milionária ",
    price: 30.90,
    image: "./images/produtos/Os segredos.jpg",
    id_categorys: 5,
    name_categorys: "Administração e Matemática Financeiras",
    selected: false
  },
  
  {
    id_product: 7,
    category: "Literatura Estrangeira",
    fk_idcategorys: 3,
    name_product: "Crepúsculo - Livro 1",
    price: 37.90,
    image: "./images/produtos/crepus.jpg",
    id_categorys: 1,
    name_categorys: "Romance",
    selected: false
  },
  {
    id_product: 3,
    category: "Literatura Estrangeira",
    fk_idcategorys: 3,
    name_product: "Lua Nova - Livro 2",
    price: 34.90,
    image: "./images/produtos/Lua Nova.jpg",
    id_categorys: 1,
    name_categorys: "Romance",
    selected: false
  },
  {
    id_product: 5,
    category: "Literatura Estrangeira",
    fk_idcategorys: 3,
    name_product: "Eclipse - Livro 3",
    price: 34.90,
    image: "./images/produtos/eclipse.jpg",
    id_categorys: 1,
    name_categorys: "Romance",
    selected: false
  },
  {
    id_product: 8,
    category: "Literatura Estrangeira",
    fk_idcategorys: 3,
    name_product: "A Culpa É Das Estrelas",
    price: 31.90,
    image: "./images/produtos/A culpa das estrelas.jpg",
    id_categorys: 1,
    name_categorys: "Romance",
    selected: false
  },
  {
    id_product: 12,
    category: "Literatura InfantoJuvenil",
    fk_idcategorys: 2,
    name_product: "A Cinco Passos De Você",
    price: 32.90,
    image: "./images/produtos/a cinco.jpg",
    id_categorys: 2,
    name_categorys: "Literatura Juvenil",
    selected: false
  },
  {
    id_product: 20,
    category: "Autoajuda",
    fk_idcategorys: 4,
    name_product: "O Milagre Da Manhã",
    price: 32.90,
    image: "./images/produtos/O milagre.jpg",
    id_categorys: 4,
    name_categorys: "Relacionamentos",
    selected: false
  },
  {
    id_product: 4,
    category: "Literatura InfantoJuvenil",
    fk_idcategorys: 2,
    name_product: "O Pequeno Príncipe",
    price: 24,
    image: "./images/produtos/O pequeno.jpg",
    id_categorys: 2,
    name_categorys: "Literatura Juvenil",
    selected: false
  },
  
  {
    id_product: 50,
    category: "Literatura Estrangeira",
    fk_idcategorys: 3,
    name_product: "Cidades de Papel",
    price: 31.90,
    image: "./images/produtos/cidade.jpg",
    id_categorys: 1,
    name_categorys: "Romance",
    selected: false
  },

  {
    id_product: 16,
    category: "Literatura Brasileira",
    fk_idcategorys: 1,
    name_product: "O Homem Mais Inteligente da História",
    price: 32.90,
    image: "./images/produtos/O homem.jpg",
    id_categorys: 1,
    name_categorys: "Romance",
    selected: false
  },

  {
    id_product: 26,
    category: "Autoajuda",
    fk_idcategorys: 4,
    name_product: "Inteligência Socioemocional",
    price: 31.90,
    image: "./images/produtos/Inteligência.jpg",
    id_categorys: 8,
    name_categorys: "Desenvolvimento Pessoal",
    selected: false
  },

  {
    id_product: 30,
    category: "Autoajuda",
    fk_idcategorys: 4,
    name_product: "Nunca Desista de Seus Sonhos",
    price: 29.90,
    image: "./images/produtos/nunca.jpg",
    id_categorys: 8,
    name_categorys: "Desenvolvimento Pessoal",
    selected: false
  },
  
 
  {
    id_product: 21,
    category: "Informática",
    fk_idcategorys: 6,
    name_product: "Código limpo - Hablbilidades Práticas",
    price: 60.90,
    image: "./images/produtos/codigo limpo.jpg",
    id_categorys: 6,
    name_categorys: "Hardware",
    selected: false
  },
 

  
  {
    id_product: 27,
    category: "Religião",
    fk_idcategorys: 7,
    name_product: "Cristianismo Puro E Simples",
    price: 34.90,
    image: "./images/produtos/Cristianismo.jpg",
    id_categorys: 9,
    name_categorys: "Cristianismo",
    selected: false
  },
  {
    id_product: 47,
    category: "Religião",
    fk_idcategorys: 7,
    name_product: "O Que Não Me Contaram Sobre Jesus",
    price: 10.90,
    image: "./images/produtos/o que.jpg",
    id_categorys: 10,
    name_categorys: "Religião (diversos)",
    selected: false
  },
  
  {
    id_product: 6,
    category: "Literatura Estrangeira",
    fk_idcategorys: 3,
    name_product: "Box Marvel - Guerra Civil e Guerras Secretas ",
    price: 36.90,
    image: "./images/produtos/BoxMarvel.jpg",
    id_categorys: 3,
    name_categorys: "Ficção Científica e Fantasia",   
    selected: false
  },
  
  {
    id_product: 32,
    category: "Literatura Estrangeira",
    fk_idcategorys: 3,
    name_product: "Coleção Especial Anne De Green Gables",
    price: 99.90,
    image: "./images/produtos/box Anne.jpg",
    id_categorys: 1,
    name_categorys: "Romance",
    selected: false
  },
  
];



export default productsList;