import React from 'react';
import { Link } from 'react-router-dom';
import { search } from '../../actions/searchActions';
import { toggleNavbarMenu } from '../../actions/applicationPropertiesActions';
import { useDispatch } from 'react-redux';
import { SEARCH_BY_CATEGORY } from '../../constants';
import './Categories.css';

const Categories = ({ categories }) => {
    const dispatch = useDispatch();
    const handleOnClick = (id) => {
        dispatch(search(id, 1, SEARCH_BY_CATEGORY));
        dispatch(toggleNavbarMenu());
    }
    return (
        <ul className="categories">
            {categories.map(category =>
                <Link
                    className="category__link"
                    to={"/search?cat=" + category.name}
                    onClick={() => handleOnClick(category.id)}
                    key={category.id}
                >
                    <li className="category__item">
                        <div className="category__content">
                            <div className="category__image">
                                <img className="img-fill" src={category.image} alt="" />
                            </div>
                            <div className="category__title">
                                {category.name}
                            </div>
                        </div>
                    </li>
                </Link>
            )}
        </ul>
    );
}

export default Categories;