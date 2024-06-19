/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { onAuthStateChanged } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { firebaseAuth } from '../utils/firebase-config';
import { fetchMovies, getGenres } from '../store';
import Navbar from '../components/Navbar';
import Slider from '../components/Slider';
import NotAvailable from '../components/NotAvailable';
import SelectGenre from '../components/SelectGenre';

function Movies() {
	const [isScrolled, setIsScrolled] = useState(false);
	const navigate = useNavigate();
	const genresLoaded = useSelector((state) => state.netflix.genresLoaded);
	const movies = useSelector((state) => state.netflix.movies);
	const genres = useSelector((state) => state.netflix.genres);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getGenres());
	});

	useEffect(() => {
		if (genresLoaded) {
			dispatch(fetchMovies({ type: 'movies' }));
		}
	}, []);

	window.onscroll = () => {
		setIsScrolled(window.pageYOffset === 0 ? false : true);
		return () => (window.onscroll = null);
	};

	onAuthStateChanged(firebaseAuth, (currentUser) => {});
	return (
		<Container>
			<div className='navbar'>
				<Navbar isScrolled={isScrolled} />
			</div>
			<div className='data'>
				<SelectGenre genres={genres} type='movie' />
				{movies.length ? <Slider movies={movies} /> : <NotAvailable />}
			</div>
		</Container>
	);
}

export default Movies;

const Container = styled.div`
	.data {
		margin-top: 8rem;
		.not-available {
			text-align: center;
			color: white;
			margin-top: 4rem;
		}
	}
`;
