create table "product"
(
    id           serial
        constraint "PK_bebc9158e480b949565b4dc7a82"
            primary key,
    name         varchar                 not null,
    description  varchar,
    price        numeric(10, 2)          not null,
    availability boolean                 not null,
    "createdAt"  timestamp default now() not null,
    "updatedAt"  timestamp default now() not null,
    "deletedAt"  timestamp
);

alter table product
    owner to postgres;

create table "order"
(
    id             serial
        constraint "PK_1031171c13130102495201e3e20"
            primary key,
    date_sale      timestamp default now() not null,
    is_delivered   boolean   default false not null,
    price_delivery numeric(10, 2),
    price_total    numeric(10, 2),
    "deletedAt"    timestamp
);

alter table "order"
    owner to postgres;

create table "order_product"
(
    id          serial
        constraint "PK_539ede39e518562dfdadfddb492"
            primary key,
    quantity    integer not null,
    comment     varchar,
    "orderId"   integer
        constraint "FK_3fb066240db56c9558a91139431"
            references "order",
    "productId" integer
        constraint "FK_073c85ed133e05241040bd70f02"
            references product,
    "deletedAt" timestamp
);

alter table order_product
    owner to postgres;

create table "user"
(
    id          serial
        constraint "PK_cace4a159ff9f2512dd42373760"
            primary key,
    name        varchar(500)                                not null,
    "lastName"  varchar(500)                                not null,
    email       varchar                                     not null
        constraint "UQ_e12875dfb3b1d92d7d7c5377e22"
            unique,
    password    varchar(500)                                not null,
    age         integer,
    address     varchar,
    "createdAt" timestamp     default now()                 not null,
    "updatedAt" timestamp     default now()                 not null,
    "deletedAt" timestamp,
    rol         user_rol_enum default 'user'::user_rol_enum not null
);

alter table "user"
    owner to postgres;

create table migrations
(
    id        serial
        constraint "PK_8c82d7f526340ab734260ea46be"
            primary key,
    timestamp bigint  not null,
    name      varchar not null
);

alter table migrations
    owner to postgres;