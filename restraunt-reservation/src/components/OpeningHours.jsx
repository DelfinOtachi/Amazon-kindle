const OpeningHours = () => {
    return (
      <section className="text-center py-16 bg-white">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">Opening Hours</h2>
        <div className="max-w-2xl mx-auto">
          <ul className="space-y-4 text-lg text-gray-700">
            <li className="flex justify-between">
              <span>Monday</span>
              <span>8:00 AM - 10:00 PM</span>
            </li>
            <li className="flex justify-between">
              <span>Tuesday</span>
              <span>8:00 AM - 10:00 PM</span>
            </li>
            <li className="flex justify-between">
              <span>Wednesday</span>
              <span>8:00 AM - 10:00 PM</span>
            </li>
            <li className="flex justify-between">
              <span>Thursday</span>
              <span>8:00 AM - 10:00 PM</span>
            </li>
            <li className="flex justify-between">
              <span>Friday</span>
              <span>8:00 AM - 11:00 PM</span>
            </li>
            <li className="flex justify-between">
              <span>Saturday</span>
              <span>8:00 AM - 11:00 PM</span>
            </li>
            <li className="flex justify-between">
              <span>Sunday</span>
              <span>10:00 AM - 8:00 PM</span>
            </li>
          </ul>
        </div>
      </section>
    );
  };
  
  export default OpeningHours;
  