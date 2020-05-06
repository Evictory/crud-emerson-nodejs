import { getCustomRepository } from 'typeorm';
import CoursesRepository from '../repositories/CoursesRepository';
import Course from '../models/Course';


interface Request {
	courseName: string,
	university: string
};

export default class CreateCourseService {
	public async execute({ courseName, university }: Request): Promise<Course> {
		const coursesRepository = getCustomRepository(CoursesRepository);

		if (!courseName || !university) {
			throw Error(
				'2 arguments are needed, but I got less',
			);
		};

		const course = coursesRepository.create({
			courseName,
			university
		});

		await coursesRepository.save(course);

		return course;
	};
};
