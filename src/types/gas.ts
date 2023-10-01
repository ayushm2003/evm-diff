type GasNon1559 = {
	limit: number;
};

type Gas1559 = GasNon1559 & {
	target: number;
};

export type Gas = Gas1559 | GasNon1559;