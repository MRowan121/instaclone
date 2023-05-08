import Stories from "./Stories";
import Posts from "./Posts";

const Feed = () => {
    return(
        <main className="grid grid-cols-1 md:grid-cols-3 md:max-w-6xl mx-auto">
            <section className="md:col-span-2">
                <Stories />
                <Posts />
            </section>
            <section>
                {/* mini profile */}
                {/*  */}
            </section>
        </main>
    )
}

export default Feed;