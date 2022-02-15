import { LightningElement } from "lwc";

export default class App extends LightningElement {
  // QUESTÃO 01.
  cod = "C-0001";
  name = "James Bond";
  phone = "(11) 90070-0707";
  email = "bondjames@email.com";
  rating = "Cold"

  trocaDados(){
    if(this.cod == "C-0001"){
      this.cod = "C-0002";
      this.name = "Goku";
      this.phone = "(80) 98000-8000";
      this.email = "eusougoku@email.com";
      this.rating = "Hot";
    }else{
      this.cod = "C-0001";
      this.name = "James Bond";
      this.phone = "(11) 90070-0707";
      this.email = "bondjames@email.com";
      this.rating = "Cold";
    }
  };

  // QUESTÃO 02.
  q1 = "Quem é esse Pokémon?!?";
  q2 = "É o Flareon!!!";
  h1 = this.q1;

  who = "https://img.playbuzz.com/image/upload/ar_1.5,c_pad,f_jpg,b_auto/q_auto:good,f_auto,fl_lossy,w_640,c_limit,dpr_1/cdn/5dd1da62-7fad-4065-ac16-928d743a2176/7af3b478-4cfa-4fce-8c24-af07c24c38c5.jpg";
  itIs = "https://img.playbuzz.com/image/upload/ar_1.5,c_pad,f_jpg,b_auto/q_auto:good,f_auto,fl_lossy,w_640,c_limit,dpr_1/cdn/5dd1da62-7fad-4065-ac16-928d743a2176/98a48255-bedb-46d7-8f6e-a54229d3c75d.jpg";
  img = this.who;

  handleClick(){
    if(this.img == this.who){
      this.img = this.itIs;
      this.h1 = this.q2;
    }else{
      this.img = this.who;
      this.h1 = this.q1;
    }  
  };

  // QUESTÃO 03.
  musicas = [
    {cod: 1, nome: "Like a Rolling Stone", artista: "Bob Dylan", album: "Highway 61 Revisited"},
    {cod: 2, nome: "(I Can't Get No) Satisfaction", artista: "The Rolling Stones", album: "Out of Our Heads"},
    {cod: 3, nome: "Imagine", artista: "John Lennon", album: "Imagine"},
    {cod: 4, nome: "What's Going On", artista: "Marvin Gaye", album: "What's Going On"},
    {cod: 5, nome: "Respect", artista: "Aretha Franklin", album: "I Never Loved A Man The Way I Love You"}
  ];
};
