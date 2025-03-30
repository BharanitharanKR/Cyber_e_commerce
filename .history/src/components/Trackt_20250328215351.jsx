import React from "react";
import { CheckCircle, User, MapPin, Book, Calendar } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const orderSteps = [
  {
    icon: <CheckCircle className="text-green-500" />,
    text: "Your order has been delivered. Thank you for shopping at Clicon!",
    date: "23 Jan, 2021 at 7:32 PM",
  },
  {
    icon: <User className="text-red-500" />,
    text: "Our delivery man (John Wick) has picked up your order for delivery.",
    date: "23 Jan, 2021 at 2:00 PM",
  },
  {
    icon: <MapPin className="text-red-500" />,
    text: "Your order has reached the last mile hub.",
    date: "22 Jan, 2021 at 8:00 AM",
  },
  {
    icon: <Book className="text-red-500" />,
    text: "Your order is on the way to (last mile) hub.",
    date: "21 Jan, 2021 at 5:32 AM",
  },
  {
    icon: <CheckCircle className="text-green-500" />,
    text: "Your order is successfully verified.",
    date: "20 Jan, 2021 at 7:32 PM",
  },
  {
    icon: <Calendar className="text-red-500" />,
    text: "Your order has been confirmed.",
    date: "19 Jan, 2021 at 2:61 PM",
  },
];

const OrderTracking = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Order Activity</h2>
      <div className="space-y-4">
        {orderSteps.map((step, index) => (
          <div key={index} className="flex items-start space-x-4">
            <div className="text-lg">{step.icon}</div>
            <div>
              <p className="font-medium">{step.text}</p>
              <p className="text-sm text-gray-500">{step.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const ProductTracking = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 mt-6 bg-white rounded-lg shadow-md">
      <div className="flex justify-between items-center border-b pb-4 mb-4">
        <div>
          <h2 className="text-xl font-semibold">Order #96459761</h2>
          <p className="text-sm text-gray-500">
            4 Products • Order Placed on 17 Jan, 2021 at 7:32 PM
          </p>
        </div>
        <div className="text-2xl font-semibold text-red-500">$1199.00</div>
      </div>
      <p className="text-sm text-gray-600 mb-2">
        Order expected arrival: 23 Jan, 2021
      </p>
      <div className="relative flex items-center justify-between mt-4">
        <div className="flex flex-col items-center text-green-500 font-semibold">
          <CheckCircle />
          <p className="text-sm">Order Placed</p>
        </div>
        <Progress value={75} className="w-full mx-2" />
        <div className="flex flex-col items-center text-gray-400">
          <CheckCircle />
          <p className="text-sm">Packaging</p>
        </div>
        <Progress value={50} className="w-full mx-2" />
        <div className="flex flex-col items-center text-gray-400">
          <CheckCircle />
          <p className="text-sm">On The Road</p>
        </div>
        <Progress value={25} className="w-full mx-2" />
        <div className="flex flex-col items-center text-gray-400">
          <CheckCircle />
          <p className="text-sm">Delivered</p>
        </div>
      </div>
    </div>
  );
};

export default function Tra() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <OrderTracking />
      <ProductTracking />
    </div>
  );
}
