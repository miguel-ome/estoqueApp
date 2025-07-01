import { City } from "../../models/City";
import { CityRepository } from "../../repository/City.repository";

interface GetAllCitiesUseCaseResponse {
  cities: City[];
}

export class GetAllCitiesUseCase {
  constructor(private cityRepository: CityRepository) {}

  execute() {}
}
