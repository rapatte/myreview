import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Post,
  Res,
  Delete,
  Param,
  Patch,
  Query,
  HttpException,
} from '@nestjs/common';
import {
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiTags,
} from '@nestjs/swagger';
import { response, Response } from 'express';
import { Mission } from '../../types/Mission';
import { MissionDomain } from '../../domain/mission/mission.domain';
import { MissionEntity } from '../../infrastructure/Mission/mission.entity';
import { MissionServiceAdapter } from './mission.service.adapter';
@ApiTags('Missions')
@Controller('missions')
export class MissionController {
  constructor(private readonly missionServiceAdapter: MissionServiceAdapter) {}
  @ApiCreatedResponse({ type: MissionEntity })
  @Post()
  async create(
    @Body() mission: Mission,
    @Res() response: Response,
  ): Promise<Mission | void> {
    try {
      const missionProperties = Object.values(mission);

      missionProperties.map((propertie) => {
        if (propertie === '') {
          throw new HttpException(
            'Tous les champs doivent être renseignés',
            HttpStatus.BAD_REQUEST,
          );
        }
      });

      const newMission = await this.missionServiceAdapter.save(mission);

      response.status(HttpStatus.CREATED).send(newMission);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }
  @ApiCreatedResponse({
    type: MissionEntity,
    isArray: true,
    description: 'Table of missions',
  })
  @Get()
  async getAll(@Res() response: Response): Promise<void> {
    try {
      const missions = await this.missionServiceAdapter.getAll();
      response.status(HttpStatus.OK).send(missions);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.NOT_FOUND);
    }
  }
  @Get('available')
  async getAvailable(@Res() response: Response): Promise<void> {
    try {
      const missions = await this.missionServiceAdapter.getAvailable();
      response.status(HttpStatus.OK).send(missions);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.NOT_FOUND);
    }
  }
  @Get('search')
  async search(@Query('criteria') search: string[]) {
    try {
      if (typeof search === 'string') {
        return await this.missionServiceAdapter.search([search]);
      } else {
        return await this.missionServiceAdapter.search(search);
      }
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.NOT_FOUND);
    }
  }
  @ApiCreatedResponse({ type: MissionEntity, description: 'the mission' })
  @ApiNotFoundResponse()
  @Get(':id')
  async getOne(@Res() response: Response, @Param('id') missionId: string) {
    try {
      const mission = await this.missionServiceAdapter.getOne(missionId);
      return response.status(HttpStatus.OK).send(mission);
    } catch (error) {
      if (
        error.message === `invalid input syntax for type uuid: \"${missionId}\"`
      ) {
        error.message = 'Le format du numéro de mission est incorrect.';
      }
      throw new HttpException(error.message, HttpStatus.NOT_FOUND);
    }
  }

  @Delete(':id')
  async deleteMission(
    @Res() response: Response,
    @Param('id') missionId: string,
  ) {
    try {
      const res = await this.missionServiceAdapter.remove(missionId);
      response.status(HttpStatus.ACCEPTED).send(res);
    } catch (error) {
      if (
        error.message === `invalid input syntax for type uuid: \"${missionId}\"`
      ) {
        error.message = 'Le format du numéro de mission est incorrect.';
      }
      throw new HttpException(error.message, HttpStatus.NOT_FOUND);
    }
  }
  @Patch(':id')
  async updateMission(
    @Res() response: Response,
    @Param('id') missionId: string,
    @Body() mission: Partial<MissionDomain>,
  ) {
    try {
      const missionUpdated = await this.missionServiceAdapter.update(
        missionId,
        mission,
      );
      response.status(HttpStatus.OK).send(missionUpdated);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.NOT_FOUND);
    }
  }
}
