import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { users } from "../../StaticData/user";
export const UsersContent = (props) => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const filter = props.filter;
  const search = props.search;
  useEffect(() => {
    if (search) {
      setFilteredData(
        data.filter((x) => {
          return (
            x.name.toLowerCase().includes(search.toLowerCase()) ||
            x.email.toLowerCase().includes(search.toLowerCase())
          );
        })
      );
    } else {
      setFilteredData(data);
    }

    //  console.log(filteredData[1].inclues(search))
  }, [search]);

  useEffect(() => {
    if (filter !== "all") {
      setFilteredData(
        data.filter((x) => {
          return x.country == filter;
        })
      );
    } else {
      setFilteredData(data);
    }
    //setData(null)
    console.log("conten", props.filter);
  }, [filter]);
  useEffect(() => {
    setData(users);
  }, []);
  useEffect(() => {
    setFilteredData(data);
  }, [data]);

  const provider = [
    "data:image/png;base64,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",
    "data:image/jpeg;base64,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",
  ];

  return (
    <>
      <section className="antialiased bg-gray-100 text-gray-600 rounded-lg">
        <div className="flex flex-col justify-center h-full mt-4">
          {/* Table */}
          <div className="w-full mx-auto bg-white shadow-lg rounded-lg border border-gray-200 ">
            <div className="p-3">
              <div className="overflow-x-auto">
                <table className="table-auto w-full">
                  <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                    <tr>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-left">nAME</div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-left">EMAIL</div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-left">Phone</div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-left">Spent</div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-center">Country</div>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-sm divide-y divide-gray-100">
                    {filteredData.slice(0, 10).map((item) => {
                      return (
                        <tr>
                          <td className="p-2 whitespace-nowrap">
                            {" "}
                            <Link to="/users/123">
                              <div className="flex items-center">
                                <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                                  <img
                                    className="rounded-full"
                                    src={
                                      provider[
                                        Math.floor(
                                          Math.random() * provider.length
                                        )
                                      ]
                                    }
                                    width={40}
                                    height={40}
                                    alt="Alex Shatov"
                                  />
                                </div>
                                <div className="font-medium text-gray-800">
                                  {item.name}
                                </div>
                              </div>{" "}
                            </Link>
                          </td>
                          <td className="p-2 whitespace-nowrap">
                            <div className="text-left">{item.email}</div>
                          </td>
                          <td className="p-2 whitespace-nowrap">
                            <div className="text-left">{item.phone}</div>
                          </td>
                          <td className="p-2 whitespace-nowrap">
                            <div className="text-left font-medium text-green-500 font-bold">
                              {item.spent.toLocaleString("en-US", {
                                style: "currency",
                                currency: "USD",
                              })}
                              {/* {formatter("100000000000")} */}
                            </div>
                          </td>
                          <td className="p-2 whitespace-nowrap">
                            <div className="text-lg text-center">
                              {item.country}
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
