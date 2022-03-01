import { Controller, Get, Query } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import {
  getManyResponseFor,
  PaginationDto,
} from 'src/common/dtos/pagination.dto';
import { PostDto } from './dtos/post.dto';
import { PostService } from './post.service';

@ApiTags('posts')
@Controller('posts')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Get()
  @ApiOkResponse({ type: getManyResponseFor(PostDto) })
  getPosts(@Query() paginationDto: PaginationDto) {
    return this.postService.getPosts(paginationDto);
  }
}
