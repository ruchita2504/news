import { DUMMY_NEWS } from '@/dummy-news';
import NewsList from '@/lib/news-list';


export default async function News() {

       let newsContent;

    if (DUMMY_NEWS) {
        newsContent = <NewsList news={DUMMY_NEWS}/>
    }
    
    return (
        <>
            <h1>News</h1>
            {newsContent}
        </>
    );
}