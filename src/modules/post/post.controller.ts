import { Controller, Get, Query } from '@nestjs/common';
import { PaginationDto } from 'src/common';
import { PostService } from './post.service';

@Controller('posts')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Get()
  getPosts(@Query() paginationDto: PaginationDto) {
    return this.postService.getPosts(paginationDto);
  }
}
