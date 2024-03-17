import React, { useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
const url = "https://intellects-9.onrender.com/api/v1/jobs/jobID";
const Single_info = () => {
  const { id } = useParams();
  const [loading, setLoading] = React.useState(false);
  const [company, setCompany] = React.useState(null);

  useEffect(() => {
    setLoading(true);
    async function getCompany() {
      try {
        console.log(`${url}${id}`);
        const response = await axios.get(url, {
          id: `${id}`,
        });

        console.log(response);
        // if (data.drinks) {

        //   setCompany(newCocktail);
        // } else {
        //   setCocktail(null);
        // }
      } catch (Error) {
        console.log(Error);
      }
    }
    getCompany();
    setLoading(false);
  }, [id]);

  return (
    <div>
      <h1>Single</h1>
    </div>
  );
};

export default Single_info;
