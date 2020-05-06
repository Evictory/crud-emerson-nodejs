import { getCustomRepository } from 'typeorm';
import CoursesRepository from '../repositories/CoursesRepository';

export default class DeleteCourseService {
	public async execute(  { id } ): Promise<void> {
		const coursesRepository = getCustomRepository(CoursesRepository);

		const idExists = await coursesRepository.findOne(id);

		if (!idExists) {
			throw new Error('This id does not exists');
		};

		coursesRepository.delete(idExists);
	};
};
