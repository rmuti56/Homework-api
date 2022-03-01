import { Module, ValidationPipe } from '@nestjs/common';
import { PostModule } from './modules/post/post.module';
import { AuthorModule } from './modules/author/author.module';
import { APP_PIPE } from '@nestjs/core';

@Module({
  imports: [PostModule, AuthorModule],
  providers: [
    {
      provide: APP_PIPE,
      useValue: new ValidationPipe({ transform: true }),
    },
  ],
})
export class AppModule {}
