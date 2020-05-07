import {Router} from 'express';

import CreateCourseService from '../services/CreateCourseService';
import ReadCourseService from '../services/ReadCourseService';
import UpdateCourseService from '../services/UpdateCourseService';
import DeleteCourseService from '../services/DeleteCourseService';

const coursesRoute = Router();

coursesRoute.get('/', async (request, response) => {
	const readCourseService = new ReadCourseService();

	try{
		const course = await readCourseService.returnValues();
		return response.status(200).json(course);

	} catch (err) {
		return response.status(400).json({ error: err.message });
	};
});

coursesRoute.get('/:id', async (request, response) => {
	const { id } = request.params;
	const readCourseService = new ReadCourseService();
	try{
		const course = await readCourseService.execute({
			id,
		});
		return response.status(200).json({ course })

	} catch (err) {
		return response.status(400).json({ error: err.message });
	};
});

coursesRoute.post('/', async(request, response) => {
	const {courseName, university} = request.body;
	const createCourse = new CreateCourseService();
	try{
		const course = await createCourse.execute({
			courseName,
			university
		});
		return response.json(course).status(201);

	} catch (err) {
		return response.status(400).json({ error: err.message });
	};
});

coursesRoute.patch('/:id', async(request, response) => {
	const { courseName, university } = request.body;
	const { id } = request.params;

	const updateCourse = new UpdateCourseService();

	try{
		const course = await updateCourse.execute({
			id,
			courseName,
			university
		});
		return response.status(201).json({ course });

	} catch (err) {
		return response.status(400).json({ error: err.message });
	};
});

coursesRoute.delete('/:id', async(request, response) => {
	const { id } = request.params;
	const deleteCourse = new DeleteCourseService();

	try{
		const course = await deleteCourse.execute({
			id,
		});
		return response.status(200).json().send();

	} catch (err) {
		return response.status(400).json({ error: err.message });
	};
});

export default coursesRoute;
