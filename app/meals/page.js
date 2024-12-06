import Link from "next/link";

const MealPage = (() => {
    return (
        <>
            <main>
                <h1>Meal Main Page</h1>
                <p><Link href='./meals/meal-1'>Meal 1</Link></p>
            </main>
        </>
    )
})

export default MealPage;