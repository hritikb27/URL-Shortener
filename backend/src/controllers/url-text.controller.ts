import {
  Controller,
  Post,
  Get,
  Query,
  Request,
  Response,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { Url, UrlTextService } from 'src/url-text/url-text.service';

@Controller('url-text')
export class UrlTextController {
  constructor(private UrlService: UrlTextService) {}

  @Post('addUrl')
  addUrl(
    @Query('userID') userID: number,
    @Query('url') url: string,
    @Query('shorturl') shorturl: string,
  ): Observable<Url> {
    return this.UrlService.addUrl({ userID, url, shorturl });
  }

  @Get('urls')
  getUrls() {
    return this.UrlService.findAll();
  }

  @Get('shorturl')
  getShortUrls(@Query('id') id: number) {
    return this.UrlService.findOne(id);
  }

  @Get('/:id')
  redirectUrl(@Request() req, @Response() res) {
    console.log(req.params.id);
    return this.UrlService.incrementView(req.params.id, res);
  }
}
