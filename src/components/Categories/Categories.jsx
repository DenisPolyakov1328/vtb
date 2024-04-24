import React from 'react'
import cat_1 from '../../assets/image/categories_1.png';
import cat_2 from '../../assets/image/categories_2.png';
import cat_3 from '../../assets/image/categories_3.png';
import cat_4 from '../../assets/image/categories_4.png';
import cat_5 from '../../assets/image/categories_5.png';
import Category from './Category/Category';

const categoryData = [
  {id: 1, title: 'Электроника и техника', image: cat_1},
  {id: 2, title: 'Супермаркеты и доставка продуктов', image: cat_2},
  {id: 3, title: 'Одежда и обувь', image: cat_3},
  {id: 4, title: 'Рестораны и доставка еды', image: cat_4},
  {id: 5, title: 'Отдых и путешествия', image: cat_5},
]

const Categories = () => {

  const categoryElements = categoryData.map((cat) => (
    <Category key={cat.id} title={cat.title} image={cat.image}/>
  ));

  return (
    <div className='h-full w-full sm:py-[75px] md:py-[130px]'>
      <h2 className='mb-[45px] text-title-blue text-3xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl'>Получить доступ к скидкам в разных категориях</h2>
      <div  className='flex flex-wrap gap-5'>{categoryElements}</div>
    </div>
  )
}

export default Categories