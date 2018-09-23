// Copyright 2017 Google Inc. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import * as functions from 'firebase-functions';
import { twitter_credentials } from './twitter_credentials';
const Twitter = require('twitter');

export const tweet = functions.pubsub
  .topic('daily-tick')
  .onPublish(async event => {
    try {
      const text = '週末限定フリーランスエンジニアやっています。日頃のちょっとした「エンジニアに解決を頼んでみたい」課題などありましたら、お気軽にご連絡ください！ホームページはこちら→https://peraichi.com/landing_pages/view/t1work (関係ないけど麻雀のメンツの埋め合わせもやります)'
      const client = new Twitter(twitter_credentials);
      await client.post('statuses/update', {status: text});
    } catch (error) {
      throw error;
    }
  });
