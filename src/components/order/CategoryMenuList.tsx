const categorylist: {categorypkey: number; categoryname: string}[] = [
    {
        categorypkey: 1,
        categoryname: "밥",
    },
    {
        categorypkey: 2,
        categoryname: "면",
    },
    {
        categorypkey: 3,
        categoryname: "탕",
    },
    {
        categorypkey: 4,
        categoryname: "고기",
    },
    {
        categorypkey: 5,
        categoryname: "술/음료",
    },
    {
        categorypkey: 6,
        categoryname: "술/음료",
    },
    {
        categorypkey: 6,
        categoryname: "술/음료",
    },
    {
        categorypkey: 6,
        categoryname: "술/음료",
    },
    {
        categorypkey: 6,
        categoryname: "술/음료",
    },
    {
        categorypkey: 6,
        categoryname: "술/음료",
    },
    {
        categorypkey: 6,
        categoryname: "술/음료",
    },
    {
        categorypkey: 6,
        categoryname: "술/음료",
    },
];

export default function CategoryMenuList() {
    return (
        <div className='flex-[4] rounded-2xl bg-white p-1'>
            <div className='flex flex-col gap-1 h-full'>
                <div className='flex-[2] grid grid-cols-5 grid-rows-2 rounded-xl bg-gray-400 w-full gap-2 p-1'>
                    {categorylist.map((item, index) => (
                        <div key={index} className='flex items-center justify-center bg-white rounded-2xl'>
                            <p>{item.categoryname}</p>
                        </div>
                    ))}
                </div>
                <div className='flex-[6] grid grid-cols-5 grid-rows-6 rounded-xl bg-gray-400 w-full gap-2 p-1'>
                    {categorylist.map((item, index) => (
                        <div key={index} className='flex items-center justify-center bg-white rounded-2xl'>
                            <p>{item.categoryname}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}