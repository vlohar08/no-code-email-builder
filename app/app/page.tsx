import EmailDisplayCard from "@/components/backend/EmailDisplayCard";
import React from "react";

function App() {
  const dummyData = [
    {
      id: 12345,
      image: "/assets/default/placeholder.jpg",
      title: "Email 1",
      lastUpdatedOn: "1st April 2023",
    },
    {
      id: 123456,
      image: "/assets/default/placeholder.jpg",
      title: "Email 2",
      lastUpdatedOn: "1st April 2023",
    },
    {
      id: 123457,
      image: "/assets/default/placeholder.jpg",
      title: "Email 3",
      lastUpdatedOn: "1st April 2023",
    },
    {
      id: 123458,
      image: "/assets/default/placeholder.jpg",
      title: "Email 4",
      lastUpdatedOn: "1st April 2023",
    },
    {
      id: 123459,
      image: "/assets/default/placeholder.jpg",
      title: "Email 5",
      lastUpdatedOn: "1st April 2023",
    },
    {
      id: 123443,
      image: "/assets/default/placeholder.jpg",
      title: "Email 6",
      lastUpdatedOn: "1st April 2023",
    },
    {
      id: 123432,
      image: "/assets/default/placeholder.jpg",
      title: "Email 7",
      lastUpdatedOn: "1st April 2023",
    },
    {
      id: 123432,
      image: "/assets/default/placeholder.jpg",
      title: "Email 8",
      lastUpdatedOn: "1st April 2023",
    },
  ];
  return (
    <main className="app-wrapper">
      {dummyData.map((email) => (
        <EmailDisplayCard key={email.id} {...email} />
      ))}
    </main>
  );
}

export default App;
