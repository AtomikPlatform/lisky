/*
 * LiskHQ/lisky
 * Copyright © 2017 Lisk Foundation
 *
 * See the LICENSE file at the top-level directory of this distribution
 * for licensing information.
 *
 * Unless otherwise agreed in a custom licensing agreement with the Lisk Foundation,
 * no part of this software, including this file, may be copied, modified,
 * propagated, or distributed except according to the terms contained in the
 * LICENSE file.
 *
 * Removal or modification of this copyright notice is prohibited.
 *
 */
import {
	givenThereIsAVorpalInstanceWithAnActiveCommandThatCanLog,
	givenThereIsAResultToPrint,
} from '../../steps/1_given';
import {
	whenTheResultIsPrinted,
	whenTheResultIsPrintedWithTheJSONOptionSetToTrue,
} from '../../steps/2_when';
import {
	thenTheResultShouldBeReturned,
	thenATableShouldBeLogged,
	thenJSONOutputShouldBeLogged,
} from '../../steps/3_then';

describe('print utils', () => {
	describe('#printResult', () => {
		describe('Given there is a Vorpal instance with an active command that can log', () => {
			beforeEach(givenThereIsAVorpalInstanceWithAnActiveCommandThatCanLog);

			describe('Given there is a result to print', () => {
				beforeEach(givenThereIsAResultToPrint);

				describe('When the result is printed', () => {
					beforeEach(whenTheResultIsPrinted);

					it('Then the result should be returned', thenTheResultShouldBeReturned);
					it('Then a table should be logged', thenATableShouldBeLogged);
				});

				describe('When the result is printed with the JSON option set to true', () => {
					beforeEach(whenTheResultIsPrintedWithTheJSONOptionSetToTrue);

					it('Then the result should be returned', thenTheResultShouldBeReturned);
					it('Then JSON output should be logged', thenJSONOutputShouldBeLogged);
				});
			});
		});
	});
});