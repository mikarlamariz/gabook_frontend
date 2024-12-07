import AxiosBase from "../axiosBase";

const CreateBook = (data) => {
    const token = localStorage.getItem('token');

    const formData = new FormData();
    formData.append('title', data.title);
    formData.append('author', data.author);
    formData.append('sinopse', data.sinopse);
    formData.append('isbn', data.isbn);
    formData.append('release_year', data.publicationYear);
    formData.append('genre_id', data.genre);
    formData.append('cover', data.image[0]);

    return AxiosBase.post('/books', formData, {headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${token}`
    }});
}

export default CreateBook;