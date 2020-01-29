#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { CdkGithubActionsStack } from '../lib/cdk-github-actions-stack';

const app = new cdk.App();
new CdkGithubActionsStack(app, 'CdkGithubActionsStack');
