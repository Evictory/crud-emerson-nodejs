import { getCustomRepository } from 'typeorm';
import Course from '../models/Course';
import CoursesRepository from '../repositories/CoursesRepository';


interface Request {
	id: string,
	courseName: string,
	university: string,
};

export default class UpdateCourseService {
	public async execute({id, courseName, university}: Request): Promise<Course> {
		const coursesRepository = getCustomRepository(CoursesRepository);

		const idCourseExists = await coursesRepository.findOne(id);

		if (!idCourseExists) {
			throw new Error('This id does not exists');
		};
		if (!courseName && !university) {
			throw new Error('impossible to update. The fields are empty');
		};

		if (courseName) {
			idCourseExists.courseName = courseName;
		};
		if (university) {
			idCourseExists.university = university;
		};
		await coursesRepository.save(idCourseExists);

		return idCourseExists;
	};
};
