import React, { useState } from "react";

const EventCard = ({
  date,
  time,
  location,
  title,
  description,
  category,
}) => {
  return (
    <div className="bg-beige-50 rounded-lg shadow-md p-4 m-4">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-xl font-bold">{title}</h2>
        <span className="text-gray-500 text-sm">{date}</span>
      </div>
      <div className="flex justify-between items-center mb-2">
        <p className="text-gray-700 text-sm">{time}</p>
        <span className="text-gray-500 text-sm">{location}</span>
      </div>
      <p className="text-gray-600 text-sm mb-2">{description}</p>
      <span
        className={`inline-block px-2 py-1 rounded-full text-xs font-bold ${
          category === "social"
            ? "bg-beige-700 text-white"
            : category === "career"
            ? "bg-beige-700 text-white"
            : category === "academic"
            ? "bg-beige-700 text-white"
            : "bg-beige-700 text-white"
        }`}
      >
        {category}
      </span>
    </div>
  );
};

const UpcomingEvents = () => {
  const [events, setEvents] = useState([
    {
      date: "2023-05-15",
      time: "6:00 PM - 8:00 PM",
      location: "Student Union Building",
      title: "Student Networking Event",
      description:
        "Join us for an evening of networking and connecting with fellow students.",
      category: "social",
    },
    {
      date: "2023-06-01",
      time: "3:00 PM - 5:00 PM",
      location: "Career Center",
      title: "Resume Building Workshop",
      description:
        "Learn how to craft a standout resume and impress potential employers.",
      category: "career",
    },
    {
      date: "2023-07-10",
      time: "9:00 AM - 12:00 PM",
      location: "Computer Science Lab",
      title: "Intro to Python Coding",
      description:
        "Dive into the fundamentals of Python programming in this hands-on workshop.",
      category: "academic",
    },
    {
      date: "2023-08-20",
      time: "7:00 PM - 9:00 PM",
      location: "Student Wellness Center",
      title: "Mindfulness and Stress Management",
      description:
        "Explore techniques to manage stress and improve your overall well-being.",
      category: "social",
    },
    {
      date: "2023-09-05",
      time: "11:00 AM - 3:00 PM",
      location: "Campus Quad",
      title: "Internship Fair",
      description: "",
      category: "career",
    },
    {
      date: "2023-10-01",
      time: "5:30 PM - 7:00 PM",
      location: "Environmental Science Building",
      title: "Sustainability Club Meeting",
      description: "",
      category: "social",
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const filteredEvents = events.filter((event) => {
    const titleMatch =
      searchTerm === "" ||
      event.title.toLowerCase().includes(searchTerm.toLowerCase());
    const categoryMatch =
      selectedCategory === "All" ||
      event.category === selectedCategory;
    return titleMatch && categoryMatch;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Upcoming Events</h1>
      <div className="flex justify-between items-center mb-4">
        <input
          type="text"
          className="border rounded-md px-4 py-2 focus:outline-none focus:ring focus:ring-blue-300"
          placeholder="Search events..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <div className="flex items-center">
          <select
            className="border rounded-md px-4 py-2 focus:outline-none focus:ring focus:ring-blue-300"
            value={selectedCategory}
            onChange={handleCategoryChange}
          >
            <option value="All">All Categories</option>
            <option value="social">Social</option>
            <option value="career">Career</option>
            <option value="academic">Academic</option>
          </select>
          <button className="ml-4 px-4 py-2 rounded-md bg-white text-grey  hover:bg-beige-200">
            Sort by Date
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredEvents.map((event, index) => (
          <EventCard key={index} {...event} />
        ))}
      </div>
    </div>
  );
};

export default UpcomingEvents;
  