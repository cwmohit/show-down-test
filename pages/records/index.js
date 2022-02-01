import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

function Records() {
  const [data, setData] = useState([]);
  const router = useRouter();
  const { users } = router.query || [];
  const getData = async () => {
    try {
      let response = null;
      if(users){
         response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/user/${users}`);
      }else{
        response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/user`);
      }

      const result = await response.json();
      console.log(result);
      setData(result);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
      getData();
  }, [users]);
  return (
    <div className="flex items-center min-h-[50vh]">
      <div className="input-share-container md:w-1/2 mx-auto">
        <table className="table-auto w-full">
          <thead className="border bg-green-400">
            <tr>
              <th className="px-3 py-5">Full Name</th>
              <th className="px-3 py-5">Email</th>
              <th className="px-3 py-5">UserName</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, i) => (
              <tr key={i}>
                <td className="px-3 py-5 text-center">{item?.full_name}</td>
                <td className="px-3 py-5 text-center">{item?.email}</td>
                <td className="px-3 py-5 text-center">{item?.username}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Records;
