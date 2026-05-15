import React from 'react';
import CarCard from '../components/CarCard';
const cars = [
  { id: 1, make: 'Toyota', model: 'Camry', price: 25000, image: 'https://picsum.photos/200/300' },
  { id: 2, make: 'Honda', model: 'Civic', price: 20000, image: 'https://picsum.photos/200/301' },
  { id: 3, make: 'Ford', model: 'Mustang', price: 30000, image: 'https://picsum.photos/200/302' }
];
function Home() {
  return (
    <div className="container">
      {cars.map((car) => (
        <CarCard key={car.id} car={car} />
      ))}
    </div>
  );
}
export default Home;