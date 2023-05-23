import React, { useEffect, useState } from "react"
import './addproduct.css'
import { Addinventory } from "../../components/admin/addInventory"
import { fictionCat } from "../../StaticData/category"
export const Editproduct = () => {

    const [fiction, setFiction] = useState(['Phisolophy', 'nonfiction'])
    const [image, setImage] = useState(['https://product.hstatic.net/200000510041/product/web_-_hinh_anh_sp_0f08bf97f8c6441585e394369f4c87f5_a43ce4f1117d438b86c66bd362f8bc4b_compact.png'])

    const onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            //  setImage(URL.createObjectURL(event.target.files[0]));
            setImage(state => [...state, URL.createObjectURL(event.target.files[0])])
        }
    }

    useEffect(() => {

    }, [])
    useEffect(() => {
        console.log(123)
    }, [fiction])
    const addFiction = (e) => {
        setFiction(state => [...state, e])
    }
    return (<>
        <div style={{ fontFamily: '"Nunito Sans", sans-serif' }} className=" rounded-xl  lg:p-6">
            <div className="flex lg:flex-row flex-col justify-between ">
                <div className="flex flex-col py-0 lg:py-4 px-4 ">
                    <span className="text-3xl font-bold ">
                        Add a product
                    </span>
                    <span className="text-sm text-gray-600 font-semi">
                        Add your and modify your products here
                    </span>
                </div>

                <div className="p-4 flex  lg:justify-end gap-2 lg:block flex-wrap  ">
                    <button className=" mr-2 font-bold border border-gray-300 rounded-lg px-4 py-2">
                        Discard
                    </button>
                    <button className=" mr-2 text-[#5153C7] font-semibold border border-gray-300 px-4 py-2 rounded-lg">
                        Save draft
                    </button>
                    <button className=" mr-2 bg-[#5153C7] text-white px-4 py-2 font-semibold rounded-lg " onClick={() => { setFiction(state => [...state, '123']) }}>
                        publish product
                    </button>

                </div>
            </div>
            <div className="flex flex-col min-w-full lg:flex-row gap-2 lg:gap-6">
                <div className="lg:w-[61.8%] w-full flex flex-col gap-2 lg:gap-6   rounded-xl ">
                    <div className="bg-white p-6 flex flex-col gap-2 lg:gap-6 rounded-xl w-full">
                        <div>
                            <div className="font-bold text-xl mb-2">
                                Product title
                            </div>
                            <input placeholder="Write title here..." type="text"
                                defaultValue={'ĐẠI DƯƠNG ĐEN - NHỮNG CÂU CHUYỆN TỪ THẾ GIỚI CỦA TRẦM CẢM'}
                                className="bg-gray-25 p-2 border border-gray-300 w-full rounded-md font-bold" />
                        </div>
                        <div>
                            <div className="font-bold text-xl mb-1">
                                product description
                            </div>
                            <div className="flex mb-1 flex-row gap-2 lg:gap-4 text-gray-500 overflow-hidden">
                                <div className='flex flex-row gap-2'>
                                    <span class="material-symbols-outlined hover:bg-blue-200 hover:text-black rounded-md">
                                        undo
                                    </span>
                                    <span class="material-symbols-outlined hover:bg-blue-200 hover:text-black rounded-md">
                                        redo
                                    </span>
                                </div>
                                <div className='flex flex-row gap-2'>
                                    <span class="material-symbols-outlined hover:bg-blue-200 hover:text-black rounded-md">
                                        format_bold
                                    </span>
                                    <span class="material-symbols-outlined hover:bg-blue-200 hover:text-black rounded-md">
                                        format_italic
                                    </span>
                                    <span class="material-symbols-outlined hover:bg-blue-200 hover:text-black rounded-md">
                                        strikethrough_s
                                    </span>
                                </div>

                                <div className='flex flex-row gap-2'>
                                    <span class="material-symbols-outlined hover:bg-blue-200 hover:text-black rounded-md">
                                        format_align_left
                                    </span>
                                    <span class="material-symbols-outlined hover:bg-blue-200 hover:text-black rounded-md">
                                        format_align_center
                                    </span>
                                    <span class="material-symbols-outlined hover:bg-blue-200 hover:text-black rounded-md">
                                        format_align_right
                                    </span>

                                </div>

                                <div className='flex flex-row gap-2'>
                                    <span class="material-symbols-outlined hover:bg-blue-200 hover:text-black rounded-md">
                                        format_list_numbered_rtl
                                    </span>
                                    <span class="material-symbols-outlined hover:bg-blue-200 hover:text-black rounded-md">
                                        format_list_bulleted
                                    </span>
                                </div>

                                <div className='flex flex-row gap-2 '>
                                    <span class="material-symbols-outlined hover:bg-blue-200 hover:text-black rounded-md ">
                                        attach_file
                                    </span>
                                </div>

                            </div>
                            <textarea defaultValue={'Tôi sợ những cơn của mình, chúng xâm chiếm não bộ tôi, nhấn chìm lý trí của tôi, chúng phơi bày sự đau đớn, cô đơn, nỗi sầu thảm suốt những năm tháng niên thiếu của tôi, sự ám ảnh của bạo lực, của lẻ loi, của tức giận vì chẳng được ai giúp đỡ. Trong những giấc mơ, tôi thét lên với mọi người, cố gắng diễn đạt sự sợ hãi và tuyệt vọng của mình, nhưng không ai hiểu.'} className=" rounded-lg bg-gray-25 h-[200px] border border-gray-300 w-full p-2" rows={4} cols={50} placeholder="Describe yourself here..." >

                            </textarea>
                        </div>
                        <div>
                            <div className="font-bold text-xl mb-2">
                                Display images
                            </div>
                            <div className="flex gap-4 m-4 ">
                                {image.map(item => {
                                    return (<>
                                        <div className="border border-gray-300 shadow-sm rounded-md pt-2 w-[100px]">
                                            <div className="h-[100px] flex items-center w-full overflow-hidden">
                                                <img className="w-full" src={item}></img>
                                            </div>

                                            <div className="text-gray-400 flex justify-between px-4 mt-2 font-semi">
                                                <span class="material-symbols-outlined text-blue-400">
                                                    visibility
                                                </span>
                                                <span class="material-symbols-outlined text-red-400 cursor-pointer" onClick={() => { setImage(state => state.filter(e => { return e !== item })) }}>
                                                    delete
                                                </span>
                                            </div>
                                        </div>
                                    </>)
                                })}



                            </div>


                            <input className="hidden" onChange={onImageChange} type='file' id='photo'></input>
                            <label for='photo'><div className="w-full h-[200px] border border-dashed border-gray-300 rounded-lg text-center ">
                                <div className="cursor-pointer h-full items-center inline-block align-text-middle align-center align-middle  h-full  ">
                                    <div className="my-[70px]">
                                        <span className=" text-sm font-semi text-gray-400">Drag your photo here or</span>
                                        <span className="text-sm text-[#5153C7] font-bold">Browse from device</span>
                                        <br></br>
                                        <span class="text-5xl text-gray-400 material-symbols-outlined">
                                            photo
                                        </span>
                                    </div>
                                </div>
                            </div></label>

                        </div>
                    </div>

                    <Addinventory></Addinventory>
                </div>
                <div className="flex-1 flex  flex-col gap-2 lg:gap-6 rounded-xl ">
                    <div className="flex flex-col gap-4 p-4 rounded-lg bg-white p-6">
                        <div className="text-2xl font-bold">
                            Organize
                        </div>
                        <div >
                            <div>
                                <span className=" font-bold text-lg">Fiction Categories</span>
                            </div>

                            <div className="h-[200px] overflow-y-scroll w-full rounded-lg border border-gray-300 mb-2  scrollbar p-1 ">
                                <div className="w-full flex flex-wrap gap-1">


                                    {
                                        fiction.map(x => {
                                            return (<>
                                                <div className=" bg-slate-100  h-fit rounded-xl  px-2 py-1 min-w-[25%] flex items-center  font-bold ">
                                                    <span className="text-[#5153C7]">
                                                        {x}
                                                    </span>
                                                    <span class="material-symbols-outlined" onClick={() => { setFiction(state => state.filter(e => { return e !== x })) }}>
                                                        close
                                                    </span>

                                                </div></>
                                            )
                                        })
                                    }



                                </div>
                            </div>

                            <select className="w-full border  border-gray-300 rounded-lg px-2 py-1" defaultValue='l' title={2} name id onChange={e => { setFiction(state => [...state, e.target.value]) }}>

                                <option value='Adventure stories.2' >Adventure stories.</option>
                                {fictionCat.map(item => {
                                    return (
                                        <option value={item} >{item}</option>
                                    )
                                })}
                            </select>
                        </div>
                        <div >
                            <div>
                                <span className=" font-bold text-lg">Nonfiction Categories</span>
                            </div>

                            <div className="h-[200px] overflow-y-scroll w-full rounded-lg border border-gray-300 mb-2  scrollbar p-1 ">
                                <div className="w-full flex flex-wrap gap-1">


                                    {
                                        fiction.map(x => {
                                            return (<>
                                                <div className=" bg-slate-100  h-fit rounded-xl  px-2 py-1 min-w-[25%] flex items-center  font-bold ">
                                                    <span className="text-[#5153C7]">
                                                        {x}
                                                    </span>
                                                    <span class="material-symbols-outlined" onClick={() => { setFiction(state => state.filter(e => { return e !== x })) }}>
                                                        close
                                                    </span>

                                                </div></>
                                            )
                                        })
                                    }



                                </div>
                            </div>

                            <select className="w-full border  border-gray-300 rounded-lg px-2 py-1" defaultValue='l' title={2} name id onChange={e => { setFiction(state => [...state, e.target.value]) }}>

                                <option value='Adventure stories.2' >Adventure stories.</option>
                                {fictionCat.map(item => {
                                    return (
                                        <option value={item} >{item}</option>
                                    )
                                })}
                            </select>
                        </div>

                        <div>
                            <div className>
                                <span className=" font-bold text-lg">Vendor</span>
                            </div>
                            <select className="w-full border  border-gray-300 rounded-lg p-2" title={2} name id>
                                <option value>Adventure stories.</option>
                            </select>
                        </div>
                        <div>
                            <div className>
                                <span className=" font-bold text-lg">Collection</span>
                            </div>
                            <select className="w-full border  border-gray-300 rounded-lg p-2" title={2} name id>
                                <option value>Adventure stories.</option>
                            </select>
                        </div>

                    </div>
                    <div className="flex flex-col gap-4  p-4 rounded-lg bg-white">
                        <div className="text-2xl font-bold">
                            Variants
                        </div>
                        <div>
                            <div className>
                                <span className=" font-bold text-lg">Option 1</span>
                            </div>
                            <select className="w-full border  border-gray-300 rounded-lg p-1" title={2} name id>
                                <option value>Adventure stories.</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}