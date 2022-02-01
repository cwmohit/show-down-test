import Router from "next/router";
import React, { useState } from "react";

function PostForm() {
  const [postUserList, setPostUserList] = useState([1]);
  const AddMore = (user) => {
    return (
      <div className="grid grid-cols-3 gap-4">
        <input
          className="py-4 px-1 border-none outline-none w-full"
          name={`full_name_${user}`}
          placeholder={`Full Name ${user}`}
          required
        />
        <input
          className="py-4 px-1 border-none outline-none w-full"
          name={`email_${user}`}
          placeholder={`Email ${user}`}
          required
        />
        <input
          className="py-4 px-1 border-none outline-none w-full"
          name={`username_${user}`}
          minLength={4}
          placeholder={`UserName ${user}`}
          required
        />
      </div>
    );
  };

  const onSubmit = async(e) => {
     e.preventDefault();
     const data = postUserList.map((item) => ({
        full_name: e.target[`full_name_${item}`].value,
        email: e.target[`email_${item}`].value,
        username: e.target[`username_${item}`].value,
     }));
     let emails = data.map((item) => item.email);
     emails = emails.join(",");
     try {         
         for(let user=0;user<data.length;user++){
            console.log(data[user])
            const res =  await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/user`,{
                method:"POST",
                headers:{
                  'Content-Type':'application/json'
                },
                body:JSON.stringify(data[user])
              })
              const res2 = await res.json();
              console.log(res2);
         }
        console.log("success")
        Router.push(`/records/?users=${emails}`);
     } catch (error) {
         console.log(error)
     }
  }

  return (
    <div className="flex items-center min-h-[50vh]">
      <form onSubmit={onSubmit} className="input-share-container md:w-1/2 mx-2 md:mx-auto border border-2 p-2 rounded-md">
        {postUserList.map((item, i) => (
          <React.Fragment key={i}>{AddMore(item)}</React.Fragment>
        ))}
        <div className="grid grid-cols-2 gap-4">
          <button
            type="button"
            onClick={() =>
              setPostUserList([
                ...postUserList,
                parseInt(postUserList[postUserList.length - 1]) + 1,
              ])
            }
            className="border px-4 py-1 rounded-full border-green-600"
          >
            Add More
          </button>
          <button
            type="button"
            onClick={() =>
              postUserList.length > 1 &&
              setPostUserList(postUserList.slice(0, -1))
            }
            className="border px-4 py-1 rounded-full border-green-600"
          >
            Remove
          </button>
        </div>
        <button className="text-white bg-green-400 px-4 py-1 w-full my-2 rounded-full">
           Submit
        </button>
      </form>
    </div>
  );
}

export default PostForm;
