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
      const text = '【定期】現在Aidemyでは組織拡大に伴い全職種でフルタイムメンバーを募集しております！また、AIに詳しいエンジニアさんで副業したいという方も募集中です！フルタイム・副業問わずAidemyで働きたいという方は是非連絡ください！'
      const client = new Twitter(twitter_credentials);
      await client.post('statuses/update', {status: text});
    } catch (error) {
      throw error;
    }
  });

  export const tweet2 = functions.pubsub
  .topic('daily-tick2')
  .onPublish(async event => {
    try {
      const text = '【定期】副業でフリーランスやってます！Node,js+Typescriptをはじめとしたjavascriptのバックエンド案件などを一番得意としています。もちろんそれ以外も色々できますので、エンジニアが必要でしたらお声がけください！'
      const client = new Twitter(twitter_credentials);
      await client.post('statuses/update', {status: text});
    } catch (error) {
      throw error;
    }
  });
