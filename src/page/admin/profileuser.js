import "./profileuser.css";
import { cBtn } from "../../components/admin/btnType";
import { Star } from "../../components/admin/star";
export const ProfileUSer = () => {
  return (
    <>
      <div className="font-sans text-[#33333] ">
        {/* user infor */}
        <div className="p-6 pb-0 sm:my-6 sm:mx-4 flex-wrap flex lg:flex-row w-auto rounded-md border border-[#ededed]  bg-[#fff] h-auto gap-5">
          <div className=" w-full lg:w-[50%]">
            <div className="  sm:text-left lg:m-0 justify-start flex-1  flex flex-col  sm:flex-row gap-4 lg:gap-8">
              <div class=" m-0 flex justify-center">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY-WucszX-59HOKnbL0qsat2TUCeZ95FZ5uyg29SB08w&s"
                  className="rounded-full w-40"
                  alt="Avatar"
                />
              </div>

              <div className=" text-center">
                <div className="font-hairline py-1 text-xl bold">
                  Lasender Maverel
                </div>
                <div className="font-hairline pb-1 text-md italic">
                  LoginName@gm.uit.edu
                </div>
                <div className="font-hairline py-1 text-md bold">
                  Client Code: DX9128312GGY
                </div>
                <div className="font-hairline py-2 text-md italic text-gray-600">
                  Join in: 22-3-323
                </div>
              </div>
            </div>

            <div className="pt-6 mt-2 border-t border-gray-400 border-dashed flex flex-row  justify-between px-4 lg:px-12">
              <div className="flex flex-col">
                <span className="font-semibold   text-sm">
                  Spending this month
                </span>
                <span className="font-seminbold text-lg text-gray-600">
                  {" > 10.000.000 vnd"}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-semibold text-sm">Diamon</span>
                <span className="font-seminbold text-2xl text-gray-600">
                  <span class="material-symbols-outlined text-4xl text-sky-300">
                    Diamond
                  </span>
                </span>
              </div>
            </div>
          </div>

          <div className="flex-1  ">
            <div className="flex items-end gap-4 lg:gap-6 py-2">
              <div className="bold text-xl min-w-[60px] lg:min-w-[70px]">
                Phone:
              </div>
              <div>9876543210</div>
            </div>
            <div className="flex items-end gap-4 lg:gap-6 py-2">
              <div className="bold text-xl min-w-[60px] lg:min-w-[70px]">
                adress:
              </div>
              <div>1861 Bayonne Ave, Manchester Township, NJ, 08759</div>
            </div>
            <div className="flex items-end gap-4 lg:gap-6 py-2">
              <div className="bold text-xl min-w-[60px] lg:min-w-[70px]">
                gender:
              </div>
              <div>Male</div>
            </div>
            <div className="flex items-end gap-4 lg:gap-6 py-2">
              <div className="bold text-xl min-w-[60px] lg:min-w-[70px]">
                Gmail:
              </div>
              <div>johndoe@example.com</div>
            </div>
            <div className="flex items-end gap-4 lg:gap-6 py-2">
              <div className="bold text-xl min-w-[60px] lg:min-w-[70px]">
                Bird day:
              </div>
              <div> 3 August</div>
            </div>
          </div>
        </div>
        {/* shipping and bank */}
        <div className=" sm:my-6 sm:mx-4 flex-wrap flex lg:flex-row w-auto rounded-md   h-auto  gap-1">
          <div className="bg-white sm:text-left text-center mt-1 flex-1 rounded-md border border-[#ededed] p-6">
            <h1 class="bold text-2xl text-center w-full mb-4">
              Shipping Information
            </h1>
            <div className="flex gap-6 pb-4">
              <div class="min-w-[65px] bold">Name: </div>
              <div>Lasender Maverel supper cute</div>
            </div>

            <div className="flex gap-6 pb-4">
              <div class="min-w-[65px] bold">Address:</div>
              <div>1861 Bayonne Ave, Manchester Township, NJ, 08759</div>
            </div>

            <div className="flex gap-6 pb-4">
              <div class="min-w-[65px] bold">Phone:</div>
              <div>9876543210</div>
            </div>

            <div className="flex gap-6 pb-4">
              <div class="min-w-[65px] bold">Shipping Method:</div>
              <div>COD</div>
            </div>
          </div>
          <div className="bg-white sm:text-left text-center flex-1 rounded-md border border-[#ededed] p-6">
            <h1 class="bold text-2xl text-center w-full mb-4">
              Bank Information
            </h1>
            <div className="flex gap-6 pb-4">
              <div class="min-w-[65px] bold">Bank name: </div>
              <div>ICICI Bank</div>
            </div>

            <div className="flex gap-6 pb-4">
              <div class="min-w-[65px] bold">Bank account No.:</div>
              <div>159843014641</div>
            </div>

            <div className="flex gap-6 pb-4">
              <div class="min-w-[65px] bold">IFSC Code:</div>
              <div>ICI24504</div>
            </div>

            <div className="flex gap-6 pb-4">
              <div class="min-w-[65px] bold">PAN No:</div>
              <div>TC000Y56</div>
            </div>
          </div>
        </div>

        {/* order */}
        <div className="max-w-full overflow-hidden">
          <h1 className="m-0 text-2xl font-bold">Order</h1>
          <table className="w-full overflow-scroll bg-white">
            <tr>
              <th className="w-[15%] text-start px-4">ORDER</th>
              <th className="w-[15%] text-start px-4">TOTAL</th>
              <th className="text-start px-4 w-[15%]">PAYMENT STATUS</th>
              <th className="text-start px-4">STATUS</th>
              <th className="text-start px-4">DELIVERY</th>
              <th className="text-start px-4">DATE</th>
            </tr>
            <tr>
              <td className="order font-semibold text-sm  text-sky-500 ">
                #2030x3
              </td>
              <td className="total">2</td>
              <td className="payment">
                <Star count={1}></Star>
                <Star count={2}></Star>
                <Star count={3}></Star>
                <Star count={4}></Star>
                <Star count={5}></Star>
                {cBtn.delay}
                {cBtn.success}
              </td>
              <td className="text-amber-200 deli">2</td>
              <td className="date">2ds</td>
            </tr>
          </table>
        </div>
      </div>
    </>
  );
};
