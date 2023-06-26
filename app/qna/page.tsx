import React from "react";
import Card from "../components/Card/Card";
import styles from "./page.module.css";
import AccordionElement from "../components/Accordion/AccordionElement";

const qna_data = [
  {
    q: "Что такое Билетопоиск?",
    a: "Мы — крупнейший сервис о кино в рунете. На нем вы сможете посмотреть фильмы и сериалы, купить билеты в кино, узнать рейтинги популярных видео и интересные факты, поставить фильмам оценки, написать рецензии и дополнить описание фильмов.",
  },
  {
    q: "Какой компании принадлежит Билетопоиск?",
    a: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia omnis excepturi libero iste laboriosam explicabo, minima, quas praesentium tempore nesciunt perspiciatis, blanditiis quam ut voluptatem voluptate vero sint velit dolor!",
  },
  {
    q: "Как купить билет на Билетопоиск?",
    a: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia omnis excepturi libero iste laboriosam explicabo, minima, quas praesentium tempore nesciunt perspiciatis, blanditiis quam ut voluptatem voluptate vero sint velit dolor!",
  },
  {
    q: "Как оставить отзыв на Билетопоиск?",
    a: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia omnis excepturi libero iste laboriosam explicabo, minima, quas praesentium tempore nesciunt perspiciatis, blanditiis quam ut voluptatem voluptate vero sint velit dolor!",
  },
];

const page = () => {
  return (
    <div className={styles["page-layout"]}>
      <Card>
        <Card.Header component={"h1"}>Вопросы-ответы</Card.Header>
      </Card>
      {qna_data.map((item, index) => (
        <Card key={index}>
          <AccordionElement question={item.q}>{item.a}</AccordionElement>
        </Card>
      ))}
    </div>
  );
};

export default page;
