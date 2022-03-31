
import MangaItem from './MangaItem/MangaItem';
import classes from './AvailableManga.module.css';

const AvailableManga = () => {
	const MANGA_LIST = [
		{
			id: 'n1',
			name: 'Dorohedoro',
			img: 'https://m.media-amazon.com/images/M/MV5BNzc4M2FkMzctYmU3ZS00MTE2LWJlN2ItMzA4NGMxMjFlMmFlXkEyXkFqcGdeQXVyNDY5MTUyNjU@._V1_.jpg',
			description: 'Manga - was created by japanese mangakas Q Hayashida, uncommon story line and "dirty" grafical design.',
			price: 19.99
		},
		{
			id: 'n2',
			name: 'The Beginning after the End',
			img: 'https://i.pinimg.com/originals/c8/b3/df/c8b3df39c30d2e15e6446d3cbcf2bf4d.png',
			description: 'is a Tapas Original seasonal comic, based on the novel of the same name, is written by TurtleMe and illustrated by Fuyuki23.',
			price: 23.99
		},
		{
			id: 'n3',
			name: 'Solo Leveling',
			img: 'https://akniga.org/uploads/media/topic/2020/11/09/14/preview/bb377b56f82cbfd12748_400x.jpg',
			description: 'is a Korean web novel written by Chu-Gong (추공). It was first serialized by Papyrus on November 4, 2016 and ended with 14 volumes and 270 chapters.',
			price: 14.99
		},
		{
			id: 'n4',
			name: 'Jujutsu Kaisen',
			img: 'https://upload.wikimedia.org/wikipedia/ru/thumb/d/d2/Jujutsu_Kaisen.jpg/640px-Jujutsu_Kaisen.jpg',
			description: 'is a manga written and illustrated by Gege Akutami and is published in Weekly Shonen Jump. The first chapter was published on March 5, 2018 in issue 14 of Weekly Shonen Jump.',
			price: 12.50
		},
		{
			id: 'n5',
			name: 'Boku no Heroic Academia',
			img: 'https://static.posters.cz/image/750/%D0%9F%D0%BB%D0%B0%D0%BA%D0%B0%D1%82%D0%B8/my-hero-academia-season-1-i56127.jpg',
			description: 'is a manga written and illustrated by Kohei Horikoshi and is published in Weekly Shonen Jump. The first chapter was published on July 7, 2014, in issue 32 of Weekly Shonen Jump.',
			price: 20
		},
		{
			id: 'n6',
			name: 'Nobbless',
			img: 'https://otakuworld720.files.wordpress.com/2016/08/download-11.jpg?w=302&h=432',
			description: 'is the title given to the strongest member of the Noble race. The Noblesse is one of the two pillars of Noble society, equivalent in standing to the Lord. ',
			price: 10
		}
	];
	return (
		<ul className={classes.list}>
			{MANGA_LIST.map(item => (<MangaItem key={item.id} id={item.id} img={item.img} name={item.name} description={item.description} price={item.price} />))}
		</ul>
	)
}

export default AvailableManga;