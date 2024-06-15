export function getImagePath(imagePath?: string, fullSize?: boolean) {
 if (imagePath) return `http://image.tmdb.org/t/p/${fullSize ? 'original' : 'w500'}/${imagePath}`
 else return 'https://knetic.org.uk/wp-content/uploads/2020/07/Picture-Placeholder.png'
};