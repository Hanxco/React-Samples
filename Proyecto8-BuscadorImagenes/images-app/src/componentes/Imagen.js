import React from 'react';

const Imagen = ( {img} ) => {
    
    const {previewURL, likes, comments, tags, largeImageURL, views} = img;

    return (
        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="card">
                <a href={largeImageURL}>
                <img src={previewURL} alt={tags} className="card-img-top" />
                </a>
                <div className="card-body">
                    <p className="card-text">{likes} Likes</p>
                    <p className="card-text">{views} Views</p>
                    <p className="card-text">{comments} Comments</p>
                </div>
                <div className="card-footer">
                    <a href={largeImageURL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary btn-block">Ver imagen</a>
                </div>
            </div>
        </div>
    );
}
 
export default Imagen;