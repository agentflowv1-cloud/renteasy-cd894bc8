import React from 'react';
interface Car {
  id: number;
  make: string;
  model: string;
  price: number;
  image: string;
}
interface CarCardProps {
  car: Car;
}
function CarCard({ car }: CarCardProps) {
  return (
    <div className="card">
      <img src={car.image} alt={car.make + ' ' + car.model} />
      <div className="card-content">
        <h2>{car.make} {car.model}</h2>
        <p>Price: ${car.price}</p>
        <button>Book Now</button>
      </div>
    </div>
  );
}
export default CarCard;