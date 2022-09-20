import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Observable, from } from 'rxjs';
import { UrlsEntity } from 'src/models/urls.entity';

export interface Url {
  id?: number;
  userID: number;
  url: string;
  shorturl: string;
  views?: number;
}

@Injectable()
export class UrlTextService {
  constructor(
    @InjectRepository(UrlsEntity)
    private readonly urlRepository: Repository<UrlsEntity>,
  ) {}

  async findOne(id: number): Promise<Url | undefined> {
    return this.urlRepository.findOneBy({ id });
  }

  async findAll(): Promise<Url[] | undefined> {
    return this.urlRepository.find();
  }

  async incrementView(url: string, res) {
    const shortUrl = `http://localhost:8080/url-text/${url}`;
    const urlObj = await this.urlRepository.findOne({
      where: {
        shorturl: shortUrl,
      },
    });
    const newUrlObj = {
      ...urlObj,
      views: urlObj.views + 1,
    };
    await this.urlRepository.save(newUrlObj);
    res.redirect(urlObj.url);
  }

  addUrl(urlObj: Url): Observable<Url | undefined> {
    const newUrl = this.urlRepository.create({
      userID: urlObj.userID,
      url: urlObj.url,
      shorturl: urlObj.shorturl,
    });

    return from(this.urlRepository.save(newUrl));
  }
}
