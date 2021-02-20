import { Module } from '@nestjs/common';
import { PostModule } from './modules/post/post.module';
import { AuthorModule } from './modules/author/author.module';

@Module({
  imports: [PostModule, AuthorModule],
})
export class AppModule {}
