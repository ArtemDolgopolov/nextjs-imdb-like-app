export function getImagePath(imagePath?: string, fullSize?: boolean) {
 if (imagePath) return `http://image.tmdb.org/t/p/${fullSize ? 'original' : 'w500'}/${imagePath}`
 else return 'https://links.papareact.com/o8z'
};