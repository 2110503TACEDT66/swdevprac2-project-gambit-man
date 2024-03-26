import CreditComp from '@/src/components/CreditComp';

export default function Credit() {
  return (
    <div className="flex flex-col">
      <CreditComp
        cImg="garage.png"
        cText={`"car garage" (https://skfb.ly/oBTKX) by AnishRoyalinc is licensed under Creative Commons Attribution-NonCommercial (http://creativecommons.org/licenses/by-nc/4.0/).`}
      />
      <CreditComp
        cImg="car1.png"
        cText={`"Cyberpunk car" (https://skfb.ly/6QUAI) by 4d_Bob is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).`}
      />
      <CreditComp
        cImg="car2.png"
        cText={`"Lamborghini Centenario LP-770 Interior SDC" (https://skfb.ly/6Z9tX) by SDC PERFORMANCE™️ is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).`}
      />
      <CreditComp
        cImg="car3.png"
        cText={`"Ford Mustang 1965" (https://skfb.ly/oFE7V) by Pooya_dh is licensed under Creative Commons Attribution-NonCommercial (http://creativecommons.org/licenses/by-nc/4.0/).`}
      />
      <CreditComp
        cImg="car4.png"
        cText={`"'90 Light Commercial Truck - Low poly model" (https://skfb.ly/ootyy) by Daniel Zhabotinsky is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).`}
      />
    </div>
  );
}
